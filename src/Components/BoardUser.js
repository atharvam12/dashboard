import React, { Component } from 'react'
import Card from './Card';

export default class BoardUser extends Component {

  constructor() {
    super()
    this.state = {
      tickets:[]
    }
  }

  async componentDidMount() {
    let url = "https://api.quicksell.co/v1/internal/frontend-assignment"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ tickets: parsedData.tickets })
  }



  render() {
    return (

      <div>
        <div className="row d-flex justify-content-evenly my-2">
        <div className="col">
            <div className="shadow p-3 mb-2 bg-body rounded"><h6 className="text-center">Anoop sharma</h6></div>
          </div>
          <div className="col">
            <div className="shadow p-3 mb-2 bg-body rounded"><h6 className="text-center">Yogesh</h6></div>
          </div>
          <div className="col">
            <div className="shadow p-3 mb-2 bg-body rounded"><h6 className="text-center">Shankar Kumar</h6></div>
          </div>
          <div className="col">
            <div className="shadow p-3 mb-2 bg-body rounded"><h6 className="text-center">Ramesh</h6></div>
          </div>
          <div className="col">
            <div className="shadow p-3 mb-2 bg-body rounded"><h6 className="text-center">Suresh</h6></div>
          </div>
        </div>




        <div className="row d-flex justify-content-evenly my-3">

          <div className="col-md-2 ">
            {this.state.tickets.map((element) => {
              if (element.userId == "usr-1") return <div className="card row gx-5 my-3" key={element.id}>
                <Card title={element.title} id={element.id} tag={element.tag} />
              </div>

            })}
          </div>


          <div className="col-md-2 ">
            {this.state.tickets.map((element) => {

              if (element.userId == "usr-2") return <div className="card row gx-5 my-3" key={element.id}>
                <Card title={element.title} id={element.id} tag={element.tag} />
              </div>
            })}
          </div>

          <div className="col-md-2 ">
            {this.state.tickets.map((element) => {

              if (element.userId == "usr-3") return <div className="card row gx-5 my-3" key={element.id}>
                <Card title={element.title} id={element.id} tag={element.tag} />
              </div>
            })}
          </div>

          <div className="col-md-2 ">
            {this.state.tickets.map((element) => {

              if (element.userId == "usr-4") return <div className="card row gx-5 my-3" key={element.id}>
                <Card title={element.title} id={element.id} tag={element.tag} />
              </div>
            })}
          </div>

          <div className="col-md-2 ">
            {this.state.tickets.map((element) => {

              if (element.userId == "usr-4") return <div className="card row gx-5 my-3" key={element.id}>
                <Card title={element.title} id={element.id} tag={element.tag} />
              </div>
            })}
          </div>

        </div>

      </div>

    )
  }
}
