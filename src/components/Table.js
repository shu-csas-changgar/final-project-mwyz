import React, { Component } from 'react';
import '../stylesheets/table.css'



export class Table extends Component {

    
    constructor() {
        super()
        this.clicked = this.clicked.bind(this)
        
    }

    renderTableHeaders(x) {
        let headers = x;
        let row = [];
        for (let i = 0; i < headers.length; i++) {
            let col = headers[i];
            row.push(<th key={i}>{col}</th>)
        }
        return (<tr>{row}</tr>);
    }


    renderRow(x, index) {
        let data = x;
        let row = [];
        for (let i = 0; i < data.length; i++) {
            let col = data[i];
            row.push(<th key={i}>{col}</th>)
        }
        return (<tr key={index} onClick={this.clicked}>{row}</tr>);
    }
    renderTableBody(x) {
        let body = x;
        let table = [];
        let index = 0;
        for (let i = 0; i < body.length; i++){
            table.push(this.renderRow(body[i], index))
            index++
        }
        
        return (<tbody>{table}</tbody>);
      }
        
    
    
    clicked(event) {
        console.log(event.currentTarget.children[0].innerHTML)
        var target = event.currentTarget.children
        this.props.onClick(target)
    }

    render() {
        
        if (this.props.type === "Items")
        {
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
        } else if (this.props.type === "Reservations") {
            let headers = ["Reservation", "office ID", "employee ID", "Date", "Duration"]
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
        else {
            return null
        }
        
    }
}




