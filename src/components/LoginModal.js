import React, { Component } from 'react';
import { Button } from './Button';

const navBarDefaultStyle = {
    display:"flex",
    flexDirection: "row",
    justifyContent: "center",
}

export class NavBar extends Component {

    render() {
        return (<div style={navBarDefaultStyle}>
            <Button title="check reservation"/>
            <Button title="delete reservation"/>
            <Button title="make reservation"/>
            <Button title="edit reservation"/>
        </div>);
    }


}

