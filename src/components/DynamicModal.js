import React, { Component } from 'react';
import "../stylesheets/login.css"
import { ReservationForm } from './ReservationForm';
import { EditReservationForm } from './EditReservation';
import { DeleteReservationForm } from './DeleteReservation';



const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50,
}


export class DynamicModal extends Component {
   
    render() {

        if (this.props.show) 
        {
            if (this.props.type === "create")
            return (<div style={backdropStyle}>
                <ReservationForm onClick={this.props.onClick}/>
            </div>);
            else if (this.props.type === "edit") {
                return (<div style={backdropStyle}>
                    <EditReservationForm selected={this.props.selected} onClick={this.props.onClick}/>
                </div>);
                
            }
            else if (this.props.type === "delete") {
                return (<div style={backdropStyle}>
                    <DeleteReservationForm onClick={this.props.onClick}/>
                </div>);
                
            }
        } else 
        {
            return null;
        }
    }


}

