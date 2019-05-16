import React, { Component } from 'react'
import Header from './Header.js'
import Input from './Input.js'
import List from './List.js'


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== '') {
      let newItem = {
        text: this._inputElement.value,

      };

      this.setState((prevState) => {
        return {
          item: prevState.item.concat(newItem)
        };
      });
    }

    this._inputElement.value = '';

    console.log(this.state.items);

    e.preventDefault();
  }

  render() {

    return (
      <div className="todoListMain">
        <Header></Header>
        <Input item={  } addItem={ newItem.text }></Input>
        <List></List>
      </div>
    )
  }
}

export default TodoList
