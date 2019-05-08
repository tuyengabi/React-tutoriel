import React, { Component } from 'react'
import Header from './Header.js'
import Input from './Input.js'
import List from './List.js'


class App extends Component {
  render() {
    return (
    <div className="container">
      <Header></Header>
      <Input></Input>
      <List></List>
    </div>
    )
  }
}

export default App
