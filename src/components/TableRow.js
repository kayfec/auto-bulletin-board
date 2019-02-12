import React from 'react';
import './TableRow.css';
import { FormatItem } from './FormaItem';


export class TableRow extends React.Component {
   
render() {
        return(
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.brand}</td>
                <td>{this.props.item.model}</td>
                <td>{this.props.item.engineVolume}</td>
                <td><FormatItem value={this.props.item.price}  /> {this.props.item.money} </td>
                <td>{this.props.item.status}</td>
                <td>        
                    <div><button onClick={this.props.onView}>Посмотреть</button></div>
                    <div><button onClick={this.props.onChange}>Изменить</button></div>
                    <div><button onClick={this.props.onRemove}>Удалить</button></div>
                </td>
            </tr>
        )
    }
}
