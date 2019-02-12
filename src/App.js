import React, { Component } from 'react';
import './App.css';
import {Table} from './components/Table';
import {Add} from './components/Add';
import {View} from './components/View';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showAdd: false,
      onView: true,
      items: [],
     curentViewItem : null,
      curentEditItem : null
    };
    this.onRemove = this.onRemove.bind(this);
    this.addClick = this.addClick.bind(this);
    this.onView = this.onView.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.closeViewClick = this.closeViewClick.bind(this);
   
  }

  addClick() {
    this.setState(prevState => {
      return {
        showAdd: !prevState.showAdd
      };
    });
  }

  closeViewClick() {
    this.setState(prevState => {
      delete prevState.curentViewItem;
      return prevState;
    })
  }

  closeEditClick() {
    this.setState(prevState => {
      delete prevState.curentEditItem;
      return prevState;
    })
  }

  onAdd(item) {
    this.setState(prevState => {
      item.id = Date.now();
      prevState.items.push(item);
      prevState.showAdd = false;
      return prevState;
    });
  }

  onEdit(item) {
    this.setState(prevState => {
      const itemIndex = prevState.items.findIndex(i => i.id === item.id);
      prevState.items[itemIndex] = item;
      delete prevState.curentEditItem;
      return prevState;
    });
  }

  onRemove(index) {
    this.setState(prevState => {
      prevState.items.splice(index, 1);

      return {
        items: prevState.items
      };
    });
  }

  onChange(index) {
    this.setState(prevState => {
      prevState.curentEditItem = this.state.items[index];
      return prevState;
    });
  }

  onView(index) {
    this.setState(prevState => {
      prevState.curentViewItem = this.state.items[index];
      return prevState;
    });
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.addClick}>Add Item</button>
        {this.state.showAdd && 
          <div id="popup1" className="overlay">
            <div className="popup">
              <h2>Создаем Анкету Авто</h2>
              <a className="close" onClick={this.addClick}>&times;</a>
              <div className="content">
                <Add onSave={this.onAdd} onChange={this.props.handleChange} />
              </div>
            </div>
          </div>
        }

        {this.state.curentEditItem && 
          <div id="popup1" className="overlay">
            <div className="popup">
              <h2>Редактируем Анкету</h2>
              <a className="close" onClick={this.closeEditClick}>&times;</a>
              <div className="content">
                <Add onSave={this.onEdit} onChange={this.props.handleChange} item={this.state.curentEditItem} />
              </div>
            </div>
          </div>
        }
       <Table items={this.state.items} onView={this.onView} onRemove={this.onRemove} onChange={this.onChange} />
        <View viewInfo={this.state.curentViewItem} closeClick={this.closeViewClick} />
      </div>
    );
  }
}

export default App;
