import React from 'react';
import './Add.css';

export class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: this.props.item ? this.props.item : {
                brand: '',
                model: '',
                engineVolume: '',
                date: '',
                price: '' ,
                money: '$ USD',
                transmishion: 'Автомат',
                color: '',
                status: 'Продается', 
                description: '',
            },
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, name) {
        const value = event.target.value;

        this.setState(prevState => {
            prevState.item[name] = value;
            return prevState;
        });
    }

    createClick() {
        this.props.onSave(this.state.item);
    }
    
    render() {
       
        return (
            <div className="add">
                <div>
                    <div> * Марка</div>
                    <div>
                        <input value={this.state.item.brand} type="text" onChange={(event) => this.handleChange(event, "brand")} /> 
                    </div>
                    <div> * модель</div>
                    <div>
                        <input value={this.state.item.model} type="text" onChange={(event) => this.handleChange(event, "model")} />
                    </div>
                    <div> * Обьем двигателя</div>
                    <div>
                        <input value={this.state.item.engineVolume} type="number" onChange={(event) => this.handleChange(event, "engineVolume")} />
                    </div>
                    <div>* Год Выпуска</div>
                    <input value={this.state.item.date} type="number" onChange={(event) => this.handleChange(event, "date")} />
                    <div> * Цена</div>
                    <div>
                        <input value={this.state.item.price} type="number" onChange={(event) => this.handleChange(event, "price")}/> 
                        <select value={this.state.item.money} name="money" onChange={(event) => this.handleChange(event, "money")}>
                            <option value="$ USD">$ USD</option>
                            <option value="₴ UAH">₴ UAH</option>
                            <option value="€ EUR">€ EUR</option>
                        </select>   
                    </div>
                    <div> * коробка</div>
                    <div>
                        <select name="transmishion" value={this.state.item.transmishion} defaultValue={this.state.item.transmishion} onChange={(event) => this.handleChange(event, "transmishion")} >
                            <option value="Автомат">Автомат</option>
                            <option value="Механника">Механника</option>
                            <option value="Полу-автомат">Полу-автомат</option>
                            <option value="Робот">Робот</option>
                        </select>
                    </div>
                    <div> * Цвет Авто</div>
                    <div>
                        <input value={this.state.item.color} type="text" onChange={(event) => this.handleChange(event, "color")} />
                    </div>
                    <div>
                        <select name="status" value={this.state.item.status} onChange={(event) => this.handleChange(event, "status")}>
                            <option value="Продается">Продается</option>
                            <option value="На сервисе">На сервисе</option>
                            <option value="В резерве">В резерве</option>
                            <option value="После ДТП">После ДТП</option>
                            <option value="Продан">Продан</option>
                        </select>
                    <div>* Описание :</div>
                    <div>
                        <input value={this.state.item.description} type="text"  className="description" onChange={(event) => this.handleChange(event, "description")} />
                    </div>    
                        <div>
                        <button type="submit" onClick={this.createClick.bind(this)}>Сохранить</button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
