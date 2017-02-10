import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    return (
      <div>
        <p>Post: <Link to={`/posts/${this.props.post.id}`}>{ this.props.post.title }</Link></p>
      </div>
    )
  }
}

export default Post
