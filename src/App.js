// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Component } from 'react'
import Navbar from './Components/Navbar';
// import Board from './Components/Board';
// import BoardUser from './Components/BoardUser';
// import BoardStatus from './Components/BoardStatus';
import Order from './Components/Order';
import MainBoard from './Components/MainBoard';


document.body.style.backgroundColor = "rgb(221 238 246)"



export default class App extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     sortBy: '', 
  //   };
  // }

  // handleSortChange = (criteria) => {
  //   this.setState({ sortBy: criteria });
  // };

  

  render() {
    return (
      <div>
        <Router>

          <Navbar />
          

          <Routes>

            <Route exact path="/" element={<MainBoard />}></Route>
            {/* <Route exact path="/status" element={<MainBoard />}></Route>
            <Route exact path="/user" element={<MainBoard />}></Route> */}
            <Route exact path="/sort" element={<Order />}></Route>

          </Routes>

        </Router>
      </div>
    )
  }
}
