import React, { Component, PropTypes } from 'react'

// make sure you've got the API running first!

const Post = props => (
  <p>{ props.post.title }</p>
)

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
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
        // EXERCISE: how do I store the new posts as state on the component?
        console.log('posts', posts)
        this.setState({posts})
      })
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.map(post => (
          // EXERCISE: render each post here
          // EXERCISE: abstract a <Post> component
          // and define propTypes for it
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
