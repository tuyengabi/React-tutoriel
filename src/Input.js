import React, { Component } from 'react'

class Input extends Component {
  render() {
    const { itemData, addItem } = this.props

    return (
      <div className="addTodo">
        <form action="" onSubmit={this.addItem}>
          <input itemData={ this.itemData } addItem={ this.addItem }
                 className="field" 
                 type="input"
                 ref={(a) => this._inputElelment = a} 
                 placeholder="Enter your task">
          </input>
          <button className="btn" type="submit">ADD</button>
        </form>
      </div>
    )
  }
}

export default Input
