import React, { Component } from 'react';
import { Button } from './Button';
import { ReservationForm } from './ReservationForm';
import { CheckReservationForm } from './CheckReservation';
import { DeleteReservationForm } from './DeleteReservation';
import { EditReservationForm } from './EditReservation';
import { Table } from './Table';

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

export class Body extends Component {
    //create function that calls fetch function and the url is localhost 500
    function fetchFunction () {
        fetch('http://localhost:500')
        .then(function (response){
            return 1
        }); 
    }
    
    render() {
        if (this.props.tab == 1) 
        {
            return <CheckReservationForm />;
        } else if (this.props.tab == 2)
        {
            return <DeleteReservationForm />;
        }
        else if (this.props.tab == 3)
        {
            return (<ReservationForm />);
        }
        else if (this.props.tab == 4)
        {
            return <EditReservationForm />;
        }
        else 
        {
            return <Table />;
        }
            
        
    }


}

