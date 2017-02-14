import React, { Component, PropTypes } from 'react'

// EXERCISE: add another item to the context, and output it in `SomeChildComponent`

export default class ContextExercise extends Component {
  getChildContext() {
    return {
      secretValue: 'bar',
      otherSecretValue: 'foo',
    }
  }
  render() {
    return (
      <div>
        <SomeChildComponent />
      </div>
    )
  }
}

ContextExercise.childContextTypes = {
  secretValue: PropTypes.string.isRequired,
  otherSecretValue: PropTypes.string.isRequired,
}

class SomeChildComponent extends Component {
  render() {
    return (
      <p>Context value: { this.context.secretValue }{ this.context.otherSecretValue }</p>
    )
  }
}
SomeChildComponent.contextTypes = {
  secretValue: PropTypes.string.isRequired,
  otherSecretValue: PropTypes.string.isRequired,
}
