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

export class EditReservationForm extends Component {

    populate() {
        document.getElementById("ID").setAttribute('value',this.props.selected[0].innerHTML);
        document.getElementById("name").setAttribute('value',this.props.selected[1].innerHTML);
        document.getElementById("date").setAttribute('value',this.props.selected[2].innerHTML);
        document.getElementById("email").setAttribute('value',this.props.selected[3].innerHTML);
        document.getElementById("ename").setAttribute('value',this.props.selected[4].innerHTML);
    }

    componentDidMount() {
        this.populate()
    }
    
    render() {
            return (<div style={modalStyle}>
                    <div className="form-header">
                            <div></div>
                            <div className="form-title">Edit Form</div>
                            <button className="close-button" onClick={this.props.onClick}>close</button>

                    </div>
                    <hr/>
                    <form >
                        <input id="ID" placeholder="reservation ID"/><br/>
                        <input id="name" placeholder="Employee Name" /><br/>
                        <input id="date" placeholder="Date" /><br/>
                        <input id="email" placeholder="email" /><br/>
                        <input id="ename" placeholder="Event Name" /><br/>
                        <input id="elocation" placeholder="Event location" /><br/>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                            <Button onClick={this.props.onClick} class="form-button" title="Save"/>
                            <Button onClick={this.props.onClick} class="form-button" title="Delete" />
                        </div>
                        
                    </form>
                </div>);
        
    }


}

