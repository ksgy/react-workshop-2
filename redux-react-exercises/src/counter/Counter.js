import React, { Component } from 'react'
import { connect } from 'react-redux'
import { store } from './store'

// EXERCISE: connect this Counter to the redux store
// and make it able to show the current state and a button to dispatch
// an action to increment it

function fetchPosts() {
  store.dispatch({ type: 'INCREMENT' })
}

class Counter extends Component {
  componentDidMount() {
    fetchPosts()
  }

  increment() {
    this.props.dispatch({ type: 'INCREMENT' })
  }

  render() {
    return (
      <div>
        <p>The current counter value is: { this.props.count }</p>
        <button onClick={e => this.increment()}>INCREMENT</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state,
  }
}
const Connected = connect(mapStateToProps)(Counter)
export default Connected
