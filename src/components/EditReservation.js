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
                    <div>
                            Edit Form
                    </div>
                    <hr/>
                    <form >
                        <input id="ID" placeholder="reservation ID"/><br/>
                        <input id="name" placeholder="Employee Name" /><br/>
                        <input id="date" placeholder="Date" /><br/>
                        <input id="email" placeholder="email" /><br/>
                        <input id="ename" placeholder="Event Name" /><br/>
                        <input id="elocation" placeholder="Event location" /><br/>
                        <Button onClick={this.props.onClick} style={{padding:"10px"}} title="submit"/>
                    </form>
                </div>);
        
    }


}

