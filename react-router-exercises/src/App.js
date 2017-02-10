import React, { Component } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Home from './Home'
import Posts from './Posts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Routing!</h2>
        </div>
        <Router>
          <div>
            <div className="exercise-select">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">All Posts</Link></li>
              </ul>
            </div>

            <div className="exercise-item">
              {/* EXERCISE: add another Route for an "about page" */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/posts" component={Posts} />
                <Route exact path="/404" render={() => (
                  <p>NOT FOUND!</p>
                )} />
                <Route path="" render={() => (
                  <Redirect to="/404" />
                )} />
            </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
