import React, { Component } from 'react';
import { Button } from './Button';
import { ReservationForm } from './ReservationForm';
import { CheckReservationForm } from './CheckReservation';
import { DeleteReservationForm } from './DeleteReservation';
import { EditReservationForm } from './EditReservation';
import { Table } from './Table';
import { DynamicModal } from './DynamicModal';
import { NONAME } from 'dns';

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

    constructor() {
        super()
        this.state = {
            show: false,
            type: "none",
            selected: [],
        }
        this.changeShow = this.changeShow.bind(this)
        this.showDelete = this.showDelete.bind(this)
        this.showCreate = this.showCreate.bind(this)
        this.showEdit = this.ShowEdit.bind(this)
        this.setSelected = this.setSelected.bind(this)
        
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
    
      
    
    render() {
        console.log(this.state.selected)
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
            return (<div style={{width: "80%", color: "gray",padding: "60px"}}>
                <div className="table">
                    <div className="table-toolbar">
                        <div className="toolbar-left">
                            <Button class="toolbar-button" title="Items"/>
                            <Button title="Employees" />
                            <Button title="Reservations" />
                        </div>
                        <div className="toolbar-right">
                            <Button title="Create +" onClick={this.showCreate}/>
                            <Button title="Delete" onClick={this.showDelete} />
                        </div>
                    </div>
                    
                    <Table onClick={this.setSelected}/>
                </div>
                <DynamicModal selected={this.state.selected} onClick={this.changeShow} show={this.state.show} type={this.state.type}/>
            </div>
            );
        }
            
        
    }


}

