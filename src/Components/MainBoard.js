import React, { Component } from 'react';
import Card from './Card';

export default class BoardGrouped extends Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      groupBy: 'status', 
    };
  }

  async componentDidMount() {
    let url = 'https://api.quicksell.co/v1/internal/frontend-assignment';
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ tickets: parsedData.tickets });
  }

  renderTicketsByGroup = () => {
    const { tickets, groupBy } = this.state;

    if (groupBy === 'status') {
      const statusGroups = [
        'Backlog',
        'Todo',
        'In progress',
        'Done',
        'Canceled',
      ];

      return statusGroups.map((status) => (
        <div className='col-md-2' key={status}>
          <div className='shadow p-3 mb-2 bg-body rounded'>
            <h6 className='text-center'>{status}</h6>
          </div>
          {tickets
            .filter((ticket) => ticket.status === status)
            .map((element) => (
              <div className='card row gx-5 my-3' key={element.id}>
                <Card title={element.title} id={element.id} tag={element.tag} />
              </div>
            ))}
        </div>
      ));
    } else if (groupBy === 'user') {
      const userGroups = [
        'usr-1',
        'usr-2',
        'usr-3',
        'usr-4',
        'usr-5',
      ];

      return userGroups.map((user) => (
        <div className='col-md-2' key={user}>
          <div className='shadow p-3 mb-2 bg-body rounded'>
            <h6 className='text-center'>{user}</h6>
          </div>
          {tickets
            .filter((ticket) => ticket.userId === user)
            .map((element) => (
              <div className='card row gx-5 my-3' key={element.id}>
                <Card title={element.title} id={element.id} tag={element.tag} />
              </div>
            ))}
        </div>
      ));
    } else if (groupBy === 'priority') {
      const priorityGroups = [0, 1, 2, 3, 4]; // Assuming priorities are integers 1 to 5

      return priorityGroups.map((priority) => (
        <div className='col-md-2' key={priority}>
          <div className='shadow p-3 mb-2 bg-body rounded'>
            <h6 className='text-center'>Priority {priority}</h6>
          </div>
          {tickets
            .filter((ticket) => ticket.priority === priority)
            .map((element) => (
              <div className='card row gx-5 my-3' key={element.id}>
                <Card title={element.title} id={element.id} tag={element.tag} />
              </div>
            ))}
        </div>
      ));
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <div className="container my-5">
          <div className='col-md-12 mb-3'>
            <select
              className='form-select'
              onChange={(e) => this.setState({ groupBy: e.target.value })}
              value={this.state.groupBy}
            >
              {/* <option value=''> Click Here to Group by...</option>  */}
              <option value='status'>Grouping By Status</option>
              <option value='user'>Grouping By User</option>
              <option value='priority'>Grouping By Priority</option>
            </select>
          </div>
        </div>

        <div className='row d-flex justify-content-evenly my-2'>
          {this.renderTicketsByGroup()}
        </div>
      </div>
    );
  }
}
