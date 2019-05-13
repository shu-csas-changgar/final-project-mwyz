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

export class CheckReservationForm extends Component {

    

    
    render() {
            return (<div style={modalStyle}>
                    <form >
                        <input placeholder="Reservation ID" /><br/>
                        <Button onClick={this.props.onClick} style={{padding:"10px"}} title="submit"/>
                    </form>
                </div>);
        
    }


}

