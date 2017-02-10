import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {
  toggle() {
    this.props.dispatch({
      type: 'TOGGLE_TODO',
      id: this.props.todo.id,
    })
  }
  render() {
    return (
      <div>
        <p> { this.props.todo.text }</p>
        <p>{ this.props.todo.done ? 'DONE' : 'NOT DONE' }</p>
        <button onClick={e => this.toggle()}>Toggle</button>
      </div>
    )
  }
}

const Connected = connect()(Todo)
export default Connected
