import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Counter from './counter/Counter'
import { store } from './counter/store'

export default class ReduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}

