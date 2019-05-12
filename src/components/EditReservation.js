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

export class EditReservationForm extends Component {

    

    
    render() {
            return (<div style={modalStyle}>
                    <form >
                        <input placeholder="reservation ID" /><br/>
                        <input placeholder="Employee Name" /><br/>
                        <input placeholder="Date" /><br/>
                        <input placeholder="email" /><br/>
                        <input placeholder="Event Name" /><br/>
                        <input placeholder="Event location" /><br/>
                        <Button style={{padding:"10px"}} title="submit"/>
                    </form>
                </div>);
        
    }


}

