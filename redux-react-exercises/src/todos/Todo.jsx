import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {
  constructor(props) {
    super(props)
  }

  onToggle(){
    this.props.dispatch({ type: 'TOGGLE_TODO', id: this.props.todo.id })
  }
  render() {
    return (
      <div>
        <p>{this.props.todo.text}</p>
        <button onClick={e => this.onToggle(e)}>Toggle</button>
        { this.props.todo.done ? 'DONE' : 'Not done!' }
      </div>
    )
  }
}

const Connected = connect()(Todo)
export default Connected
