import React, { Component } from 'react';
import '../stylesheets/table.css'
import { Button } from './Button';



export class Table extends Component {

    
    constructor() {
        super()
        this.clicked = this.clicked.bind(this)
        
    }

        
    
    
    clicked(event) {
        console.log(event.currentTarget.children[0].innerHTML)
        var target = event.currentTarget.children
        this.props.onClick(target)
    }

    render() {
        return (<div>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Item ID</th>
                        <th>employee ID</th>
                        <th>Return Date</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onClick={this.clicked}>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    <td>a</td>
                    </tr> 
                    <tr onClick={this.clicked}>
                    <td>b</td>
                    <td>b</td>
                    <td>b</td>
                    <td>b</td>
                    <td>b</td>
                    </tr> 
                </tbody>
                
</table>
        </div>);
    }
}




