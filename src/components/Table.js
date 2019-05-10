import React, { Component } from 'react';
import '../stylesheets/table.css'
import { Button } from './Button';



export class Table extends Component {

    

    
    render() {
        return (<div>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Item ID</th>
                    <th>employee ID</th>
                    <th>Return Date</th>
                    <th>Address</th>
                </tr>
                
</table>
        </div>);
    }
}




