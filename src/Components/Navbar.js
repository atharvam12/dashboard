import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";


export default class Navbar extends Component {
    render() {

        const { onSortChange } = this.props;

        return (
            <div className='d-flex justify-content-start'>

                <div className="dropdown mx-2 my-2">
                    <button className="btn btn-primary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Grouping
                    </button>
                    <ul className="dropdown-menu">
                        {/* <li><Link className="dropdown-item" to="/status">Status</Link></li> */}
                        <li><Link className="dropdown-item" to="/">Group</Link></li>
                        {/* <li><Link className="dropdown-item" to="/user">User</Link></li> */}
                    </ul>
                </div>


                <div className="dropdown mx-2 my-2">
                    <button className="btn btn-primary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Ordering
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="/sort" >Sort</Link></li>
                    </ul>
                </div>

                

            </div>



        )
    }
}
