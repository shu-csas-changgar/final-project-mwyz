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
    marginTop: 10,
    padding: 30,
    position: 'relative',
}

export class RegistrationForm extends Component {

    

    
    render() {
            return (<div style={modalStyle}>
                    <form >
                        <input placeholder="First Name" /><br/>
                        <input placeholder="Last Name" /><br/>
                        <input placeholder="Email" /><br/>
                        <input placeholder="Phone" /><br/>
                        <input placeholder="OfficeID" /><br/>
                        <input placeholder="Password" /><br/>
                        <input placeholder="Re-type Password"/><br/>
                        <input placeholder="Address"/><br/>
                        <input placholder="cityid" /><br/>
                        <input placholder="country" /><br/>
                        <Button title="submit"/>
                    </form>
                </div>);
        
    }
}