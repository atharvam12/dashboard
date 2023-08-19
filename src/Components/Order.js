import React, { Component } from 'react';
import Card from './Card';

export default class Order extends Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      sortBy: '', // Track the current sorting criterion
    };
  }

  async componentDidMount() {
    let url = 'https://api.quicksell.co/v1/internal/frontend-assignment';
    let ticketsResponse = await fetch(url);
    let parsedData = await ticketsResponse.json();

    // Convert JSON object into an array
    let ticketsArray = Object.values(parsedData.tickets);

    this.setState({ tickets: ticketsArray });
  }

  handleSortChange = (event) => {
    const selectedSort = event.target.value;

    if (selectedSort === 'title') {
      let sortedTickets = this.state.tickets.slice().sort((a, b) => a.title.localeCompare(b.title));
      this.setState({ tickets: sortedTickets, sortBy: 'title' });
    } else if (selectedSort === 'priority') {
      let sortedTickets = this.state.tickets.slice().sort((a, b) => b.priority - a.priority);
      this.setState({ tickets: sortedTickets, sortBy: 'priority' });
    } else {
      this.setState({ sortBy: '' });
    }
  };

  render() {
    let { object } = this.props;
    let { sortBy } = this.state;

    return (
      <div>
        <h1 className='text-center my-4'> Ordering Cards by {sortBy || 'default'} </h1>
        <div className='container'>
        <div className='col-md-12 mb-3'>
              <select className='form-select' onChange={this.handleSortChange} value={sortBy}>
                <option value=''>Click Here to Sort by...</option>
                <option value='title'>Title - Acending Order</option>
                <option value='priority'>Priority - Decending Order</option>
              </select>
            </div>
          <div className='row my-3'>
            {this.state.tickets.map((element) => (
              <div className='col-md-4 my-3' key={element.id}>
                <Card title={element.title} id={element.id} tag={element.tag} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
