import React from 'react';
import './View.css';
import { FormatItem } from './FormaItem';

export class View extends React.Component {
    render() {
        return (
            <div>
            {this.props.viewInfo && 
                <div id="popup2" className="View">
                    <div className="popup">
                        <h2>Полнная информация</h2>
                        <a className="close" onClick={this.props.closeClick}>&times;</a>
                        <div className="content">  
                            <div className="vision" id='firstname'>
                            <div> * id: {this.props.viewInfo.id} </div>
                            <div> * Марка: {this.props.viewInfo.brand} </div>
                            <div> * модель: {this.props.viewInfo.model }</div>
                            <div> * Обьем двигателя: {this.props.viewInfo.engineVolume}</div>
                            <div> * Цена: <FormatItem value={this.props.viewInfo.price} /> {this.props.viewInfo.money}</div>
                            <div> * коробка : {this.props.viewInfo.transmishion}</div>
                            <div> * Цвет Авто: {this.props.viewInfo.color}</div>
                            <div> * Статус: {this.props.viewInfo.status}</div>
                            <div> * Описание: {this.props.viewInfo.description} </div>
                        </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}
