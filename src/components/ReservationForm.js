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

export class ReservationForm extends Component {

    constructor(props) {
        super(props)
        
        this.postReservation = this.postReservation.bind(this)
    }
    postReservation(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        // fetch("http://localhost:5000/postReservation", {
        //     method: "post",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },

        //     //make sure to serialize your JSON body
        //     body: JSON.stringify(data)
        //     })
        //     .then( (response) => { 
        //     //do something awesome that makes the world a better place
        //     });
        console.log(data.keys)
        console.log(data.values)

        var object = {};
        data.forEach(function(value, key){
            object[key] = value;
        });
        var json = JSON.stringify(object);
        console.log(json)
        this.props.onClick()
}

    
    render() {
            return (<div style={modalStyle}>
                        <div>
                            Reservation Form
                        </div>
                        <hr/>
                        <form >
                            <input placeholder="Employee Name" name="employee" /><br/>
                            <input placeholder="Date"  name="date" /><br/>
                            <input placeholder="email" name="email" /><br/>
                            <input placeholder="Event Name" name="ename" /><br/>
                            <input placeholder="Event location" name="elocation" /><br/>
                            
                            
                            <Button onClick={this.postReservation} style={{padding:"10px"}} title="Submit"/>
                        </form>
                </div>);
        
    }


}

