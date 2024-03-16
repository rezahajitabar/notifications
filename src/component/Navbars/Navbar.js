import React, { Component } from 'react'
import './Navbar.css'
export default class Navbar extends Component {
  constructor(props){
    super(props)

    this.state={
   Notification:[ 
  "1,اطلاعیه شماره",
   "2,اطلاعیه شماره",
   "3,اطلاعیه شماره",
   "4,اطلاعیه شماره",
   "5,اطلاعیه شماره"]  
    }
  }

  
  render() {
    return (
        <nav>
          <div className='container'>
            <h1>
              Hello World
            </h1>
            <div className='container-main'>
             <h4>News</h4>
             {this.state.Notification.length >= 5 && 
             <span>123</span>
             }
          </div>
          </div>
          
          
        </nav>
     
    )
  }
}
