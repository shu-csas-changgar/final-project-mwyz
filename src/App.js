import React, { Component } from 'react';

import './App.css';
import { Button } from './components/Button';
import { NavBar } from './components/NavBar';
import { LoginModal } from './components/LoginModal';

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
    }
    this.changeShow = this.changeShow.bind(this);
  }

  changeShow() {
    let bool = !this.state.show
    this.setState({
      show: bool,
    })

  } 

  render() {
    if (this.state.loggedIn)
    {
      return (
        <body>
          <div className="App">
            <div style={headerStyle}>
                <NavBar />
                <Button style={homeButtonStyle} title="home"/>
            </div>
        </div>
        </body>
      );
    } else
    {
      return (
        <body>
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
