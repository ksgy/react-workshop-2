import React, { Component } from 'react'
import Post from './Post'

// EXERCISE: can you update this component so it makes an API request to fetch the posts from our dummy API, and renders them?
/*
1. fetch() the posts on componentDidMount
2. Add them to state
3. Render them in the page
*/
class Posts extends Component {
	constructor(props) {
	  super(props)
	  this.state = {
	    posts: undefined
	  }

	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData(){
		fetch('http://localhost:3004/posts')
	    .then(data => data.json())
	    .then(posts => {
	      this.setState({posts})
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

export default Posts
