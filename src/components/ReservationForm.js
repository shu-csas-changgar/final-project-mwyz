import React, { Component } from 'react';
import { Button } from './Button';


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

        fetch("http://localhost:5000/postReservation", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify(data)
            })
            .then( (response) => { 
            //do something awesome that makes the world a better place
            });
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
                        <div className="form-header">
                            <div></div>
                            <div className="form-title">Reservation Form</div>
                            <button className="close-button" onClick={this.props.onClick}>close</button>
                        </div>
                        <hr/>
                        <form >
                            <input placeholder="Employee Name" name="employee" /><br/>
                            <input placeholder="Date"  name="date" /><br/>
                            <input placeholder="email" name="email" /><br/>
                            <input placeholder="Event Name" name="ename" /><br/>
                            <input placeholder="Event location" name="elocation" /><br/>
                            
                            
                            <Button onClick={this.postReservation} class="form-button" title="Submit"/>
                        </form>
                </div>);
        
    }


}

