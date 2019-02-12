import React from 'react';
import "./Table.css";
import {TableRow} from './TableRow';

export class Table extends React.Component {

    render() {
        let rows
        if(this.props.items != false){
            rows = this.props.items.map(
            (item, index) => <TableRow key={item.id} item={item}
            onRemove={() => this.props.onRemove(index)}
            onView={() => this.props.onView(index)}
            onChange={() => this.props.onChange(index)} />);
            
            } else {
            rows = <td colSpan='7'>Пока нету обьявлений</td>
            }    
        return (
            <table border="1">
                <thead> 
                    <tr>
                        <th>ID обьявления:</th>
                        <th>Марка</th>
                        <th>модель</th>
                        <th>Обьем двигателя</th>
                        <th>Цена</th>
                        <th>Статус</th>
                        <th>Допол-но</th>
                    </tr>
                </thead>
                <tbody>                    
                    {rows} 
                </tbody>

            </table>
        );
    }
}
