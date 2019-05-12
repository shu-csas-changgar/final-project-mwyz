import React, { Component } from 'react';
import { Button } from './Button';
import "../stylesheets/login.css"

const defaultButtonStyle = {
    height: 100,
    width: '100%',
    justifyContent: 'center'
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
    display: "flex",
    flexDirection: "column",

}

const inputStyle = {
    textAlign: 'left',
    padding: 10,
}

export class LoginModal extends Component {

    

    
    render() {

        if (this.props.show) 
        {
            return (<div style={backdropStyle}>
                <div style={modalStyle}>
                    <div style={inputStyle}>
                        Username:<br/>
                        <input type="text" placeholder="username"/>
                    </div>
                    <div style={inputStyle}>
                        Password:<br/>
                        <input type="password" placeholder="password"/>
                    </div>
                    <div style={defaultButtonStyle}>
                        <button className="button" onClick={this.props.onClose}>Login</button>
                    </div>
                </div>
            </div>);
        } else 
        {
            return null;
        }
    }


}

