import React, { Component } from 'react';


const ButtonDefaultStyle = {
    backgroundColor:"black",
	opacity: 0.75,
	height: 50,
	width: 140,
    border: "none",
    borderColor: "white",
	color:"white",
	textAlign: "center",
	textDecoration: "none",
	display: "inline-block",
    fontSize: "16px",
    borderWidth: "1px",
    //borderRadius: "12px",
    
}

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

const defaultStyle = {
    //paddingRight: 20,
    //paddingLeft: 20,
}

export class Button extends Component {

    constructor() {
        super()
        this.state = {
            hover: false,
        }
        this.hoverChange = this.hoverChange.bind(this)
        this.hoverExit = this.hoverExit.bind(this)
    }

    hoverChange() {
        this.setState({
            hover: true,
        })
        
    }

    hoverExit() {
        this.setState({
            hover: false,
        })
        
    }



    render() {

        var style = ButtonDefaultStyle;
        if(this.state.hover) {
            style = hoverStyle;
        }

        return(<div style={defaultStyle}>
            <button style={style} onMouseEnter={this.hoverChange} onMouseLeave={this.hoverExit}>{this.props.title}</button>
        </div>);
    }

} 

