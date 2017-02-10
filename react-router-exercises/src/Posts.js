import React, { Component } from 'react'
import Post from './Post'
import SinglePost from './SinglePost'
import { Route } from 'react-router-dom'

class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: undefined
    }
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    fetch('http://localhost:3004/posts')
      .then(data => data.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    if (!this.state.posts) return <p>Loading</p>

    return (
      <div>
        <ul>{this.state.posts.map(p => <li key={p.id}><Post post={p} /></li>)}</ul>
        <hr />
        <Route path="/posts/:id" component={SinglePost} />
      </div>
    )
  }
}

export default Posts
