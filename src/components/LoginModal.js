import React, { Component } from 'react';
import { Button } from './Button';

const navBarDefaultStyle = {
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
}

const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
}

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    position: 'relative',
}

export class LoginModal extends Component {

    

    
    render() {

        if (this.props.show) 
        {
            return (<div style={backdropStyle}>
                <div style={modalStyle}>
                  <input type="text" placeholder="username"/>
                  <input type="password" placeholder="password"/>
                  <button onClick={this.props.onClose}>Login</button>
                </div>
            </div>);
        } else 
        {
            return null;
        }
    }


}

