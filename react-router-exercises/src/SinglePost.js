import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

// EXERCISE: can you update this component so it makes an API request to fetch the post based on the ID?
/*
1. fetch() the post
2. Add it to the state
3. Render it
4. Deal with the case of a post not being found
*/
class SinglePost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: undefined,
      notFound: false
    }
  }

  componentDidMount() {
    this.fetchPost()
  }

  componentDidUpdate(prevProps) {
    const oldId = prevProps.match.params.id
    const newId = this.props.match.params.id

    if (oldId !== newId) {
      this.fetchPost()
    }
  }

  fetchPost() {
    fetch(`http://localhost:3004/posts/${this.props.match.params.id}`)
      .then(data => data.json())
      .then(post => {
        if (post.id) {
          this.setState({ post })
        } else {
          this.setState({ notFound: true })
        }
      })
  }
  render() {
    if (this.state.notFound) return <Redirect to="/404" />

    if (!this.state.post) return <p>Loading...</p>


    return (
      <div>
        <p>A single post! { this.state.post.title }</p>
      </div>
    )
  }
}

export default SinglePost
