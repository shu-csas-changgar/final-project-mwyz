import React, { Component } from 'react';
import { Button } from './Button';
import { ReservationForm } from './ReservationForm';
import { CheckReservationForm } from './CheckReservation';
import { DeleteReservationForm } from './DeleteReservation';
import { EditReservationForm } from './EditReservation';
import { Table } from './Table';
import { DynamicModal } from './DynamicModal';


const hoverStyle = {
    backgroundColor:"white",
	opacity: 0.75,
	height: 50,
	width: 140,
    border: "none",
    borderColor: "white",
	color:"black",
	textAlign: "center",
	textDecoration: "none",
	display: "inline-block",
    fontSize: "16px",
    borderWidth: "1px",
}

export class Body extends Component {

    constructor() {
        super()
        this.state = {
            show: false,
            type: "none",
            selected: [],
            table: "Items",
        }
        this.changeShow = this.changeShow.bind(this)
        this.showDelete = this.showDelete.bind(this)
        this.showCreate = this.showCreate.bind(this)
        this.showEdit = this.ShowEdit.bind(this)
        this.setSelected = this.setSelected.bind(this)
        this.reservationTable = this.reservationTable.bind(this)
        this.itemTable = this.itemTable.bind(this)
        
    }

    //create function that calls fetch function and the url is localhost 500
    fetchFunction () {
        fetch('http://localhost:5000')
        .then(function (response){
            return 1
        }); 
    }

    changeShow() {
        let bool = !this.state.show
        this.setState({
            show: bool,
        })
        console.log("clicked")
    }

    showCreate() {
        let bool = !this.state.show
        this.setState({
          show: bool,
          type: "create"
        })
      }

    ShowEdit() {
        let bool = !this.state.show
        this.setState({
          show: bool,
          type: "edit"
        })
      }
    
    showDelete() {
        let bool = !this.state.show
        this.setState({
          show: bool,
          type: "delete"
        })
      }

    setSelected(x) {
        let bool = !this.state.show
        this.setState({
            selected: x,
            show: bool,
            type: "edit"
        })
    }

    reservationTable() {
        this.setState({
            table: "Reservations"
        })
    }

    itemTable() {
        this.setState({
            table: "Items"
        })
    }
    
      
    
    render() {
        if (this.props.tab === 1) 
        {
            return <CheckReservationForm />;
        } else if (this.props.tab === 2)
        {
            return <DeleteReservationForm />;
        }
        else if (this.props.tab === 3)
        {
            return (<ReservationForm />);
        }
        else if (this.props.tab === 4)
        {
            return <EditReservationForm />;
        }
        else 
        {
            return (<div style={{width: "80%", color: "gray",padding: "60px"}}>
                <div className="table">
                    <div className="table-toolbar">
                        <div className="toolbar-left">
                            <Button style={this.state.table === "Items" ? hoverStyle : null} onClick={this.itemTable} class="toolbar-button" title="Items"/>
                            <Button style={this.state.table === "Reservations" ? hoverStyle : null} onClick={this.reservationTable} title="Reservations" />
                        </div>
                        <div className="toolbar-right">
                            <Button title="Create +" onClick={this.showCreate}/>
                        </div>
                    </div>
                    
                    <Table type={this.state.table} onClick={this.setSelected}/>
                </div>
                <DynamicModal selected={this.state.selected} onClick={this.changeShow} show={this.state.show} type={this.state.type}/>
            </div>
            );
        }
            
        
    }


}

