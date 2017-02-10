import React, { Component, PropTypes } from 'react'

// make sure you've got the API running first!

const Post = props => <p id={`post-${props.post.id}`}>ID: { props.post.id }, { props.post.title }</p>

Post.propTypes = {
  // post: PropTypes.object.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: undefined
    }
  }

  componentDidMount() {
    fetch('http://localhost:3004/posts')
      .then(data => data.json())
      .then(posts => {
        this.setState({
          posts
        })
      })
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.map(post => (
          <li key={post.id}><Post post={post} /></li>
        )) }
      </ul>
    )
  }

  render() {
    return (
      <div>
        { !this.state.posts && <p>Loading</p>}
        { this.state.posts && this.renderPosts() }
      </div>
    )
  }
}
