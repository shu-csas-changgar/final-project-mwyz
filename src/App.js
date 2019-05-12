import React, { Component } from 'react';

import './App.css';
import { Button } from './components/Button';
import { NavBar } from './components/NavBar';
import { LoginModal } from './components/LoginModal'
import { Body } from './components/body';


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
      loggedIn: false,
      tab: 5,
    }
    this.changeShow = this.changeShow.bind(this);
    this.changeTab = this.changeTab.bind(this);
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

  render() {
    if (this.state.loggedIn)
    {
      return (
          <div className="App">
            <div style={headerStyle}>
                <NavBar onClick={this.changeTab} tab={this.state.tab}/>
                <Button style={homeButtonStyle} onClick={this.changeTab} tab={this.state.tab} title="home"/>
            </div>
            <Body tab={this.state.tab}/>
        </div>
      );
    } else
    {
      return (
        <body className="homePage">
          <div className="App">
            <div style={headerStyle}>
              <Button style={homeButtonStyle} title="home"/>
              <Button style={loginButtonStyle} onClick={this.changeShow} title="Login"/>
            </div>
            <LoginModal show={this.state.show} onClose={this.changeShow}/>
          </div>
        </body>
      );
    }
    
  }
}

export default App;
