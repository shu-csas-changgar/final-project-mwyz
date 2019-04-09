import React, { Component } from 'react';

import './App.css';
import { Button } from './components/Button.js'
import { NavBar } from './components/NavBar';

class App extends Component {
  render() {
    return (
      <body>
        <div className="App">
        <NavBar />
        <div className="App-logo">
          welcome home 
        </div>
        <body className="Table">
          This is where we are gonna place the table
        </body>
      </div>
      </body>
    );
  }
}

export default App;
