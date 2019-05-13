import React, { Component } from 'react';
import '../stylesheets/table.css'
import { Button } from './Button';



export class Table extends Component {

    
    constructor() {
        super()
        this.clicked = this.clicked.bind(this)
        
    }

    renderTableHeaders(x) {
        let headers = x;
        let row = [];
        for (let i = 0; i < headers.length; i++) {
            console.log(i)
            let col = headers[i];
            row.push(<th>{col}</th>)
        }
        return (<tr>{row}</tr>);
    }


    renderRow(x) {
        let data = x;
        let row = [];
        for (let i = 0; i < data.length; i++) {
            let col = data[i];
            row.push(<th>{col}</th>)
        }
        return (<tr onClick={this.clicked}>{row}</tr>);
    }
    renderTableBody(x) {
        let body = x;
        let table = [];
        for (let i = 0; i < body.length; i++){
            table.push(this.renderRow(body[i]))
        }
        
        return (<tbody>{table}</tbody>);
      }
        
    
    
    clicked(event) {
        console.log(event.currentTarget.children[0].innerHTML)
        var target = event.currentTarget.children
        this.props.onClick(target)
    }

    render() {
        let headers = ["Item", "Item ID", "employee", "Return Date", "Address"]
        let body = [["a","a","a","a","a"],["b","b","b","b","b"],["c","c","c","c","c"]];
        return (<div>
            <table>
                <thead>
                    {this.renderTableHeaders(headers)}
                </thead>
                  
                {this.renderTableBody(body)}
                
            </table>
        </div>);
    }
}




