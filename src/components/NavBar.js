import React, { Component } from 'react';
import { Button } from './Button';

const navBarDefaultStyle = {
    float: 'right',
    display:"flex",
    flexDirection: "row",
    justifyContent: "center",
}

const activeButtonStyle = {
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

export class NavBar extends Component {

    constructor() {
        super()
        this.checkReservation = this.checkReservation.bind(this);
        this.deleteReservation = this.deleteReservation.bind(this);
        this.makeReservation = this.makeReservation.bind(this);
        this.editReservation = this.editReservation.bind(this);
    }

    checkReservation() {
        this.props.onClick(1);
    }

    deleteReservation() {
        this.props.onClick(2);
    }

    makeReservation() {
        this.props.onClick(3);
    }

    editReservation() {
        this.props.onClick(4)
    }

    render() {
        return (<nav style={navBarDefaultStyle}>
            <Button onClick={this.checkReservation} style={this.props.tab === 1 ? activeButtonStyle : null} title="check reservation"/>
            <Button onClick={this.deleteReservation} style={this.props.tab === 2 ? activeButtonStyle : null} title="delete reservation"/>
            <Button onClick={this.makeReservation} style={this.props.tab === 3 ? activeButtonStyle : null} title="make reservation"/>
            <Button onClick={this.editReservation} style={this.props.tab === 4 ? activeButtonStyle : null} title="edit reservation"/>
        </nav>);
    }


}

