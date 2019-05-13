import React, { Component } from 'react';

import './App.css';
import { Button } from './components/Button';

import { LoginModal } from './components/LoginModal'
import { Body } from './components/body';

let axios = require('axios')


const headerStyle = {
  width: '100%',
  height: 50,
  backgroundColor: 'black',

}

const homeButtonStyle = {
  float: 'left',
}

const loginButtonStyle = {
  float: 'right',
}



class App extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      loggedIn: true,
      tab: 5,
      data: []
    }
    this.changeShow = this.changeShow.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this)
  }

  componentDidMount() {
    this.getTableData()
  }

  getTableData() {
      fetch('http://localhost:5000/viewTable')
      .then(response => response.json())
      .then(dataa => this.setState({data: dataa}))
      
      
  }

  changeShow() {
    let bool = !this.state.show
    this.setState({
      show: bool,
    })
  } 

  changeTab(x) {
    if (x)
    {
      this.setState({
        tab: x,
      })
    } else 
    {
      this.setState({
        tab: 0,
      })
    }
    
  }

  logout() {
    let bool = !this.state.loggedIn
    this.setState({
      loggedIn: bool,
    })
  }

  login() {
    let bool = !this.state.loggedIn
    this.setState({
      loggedIn: bool,
    })
  }

  render() {
    if (this.state.loggedIn)
    {
      return (
          <div className="App">
            <div className="header-bar" >
                <div ><div className="logo">ABC Group</div></div> 
                <Button className="right-button" onClick={this.logout} tab={this.state.tab} title="Logout"/>
            </div>
            <Body tab={this.state.tab}/>
        </div>
      );
    } else
    {
      return (
        <body className="homePage">
          <div className="App">
            <div className="header-bar" >
              <div ><div className="logo">ABC Group</div></div> 
              <Button  onClick={this.changeShow} title="Login"/>
            </div>
            <LoginModal onClick={this.login} show={this.state.show} onClose={this.changeShow}/>
          </div>
        </body>
      );
    }
    
  }
}

export default App;
