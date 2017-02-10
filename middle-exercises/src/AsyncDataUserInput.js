import React, { Component } from 'react'

// make sure you've got the API running first!

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // EXERCISE: you'll need to store the user's search term in state
      posts: undefined,
      searchInput: ''
    }
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    // EXERCISE: how can you change this search query based on what
    // the user has typed into the text field
    fetch(`http://localhost:3004/posts`)
      .then(data => data.json())
      .then(posts => {
        this.setState({
          posts: posts,
        })
      })
  }

  onSearchChange(e) {
    this.setState({
      searchInput: e.target.value
    }, () => {
      // the state has updated
    })
  }

  onFormSubmit(e) {
    e.preventDefault()
    this.fetchPosts()
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.filter(post =>
          post.title.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) > -1
        ).map(post => (
          // EXERCISE: abstract this into its own component
          // and fill out the propTypes
          <li key={post.id}><p>{post.title}</p></li>
        )) }
      </ul>
    )
  }
  render() {
    return (
      <div>
        { !this.state.posts && <p>Loading</p>}
        { this.state.posts && this.renderPosts() }
        { /* EXERCISE: bind to the onSubmit event on this form so we can search when the user submits */ }
        { /* EXERCISE: you'll need to bind to the onChange event of the input to know the latest value that the user has typed */}
        <form onSubmit={e => this.onFormSubmit(e)}>
          { /* EXERCISE: csn you make this input auto focus when the user visits the page, like we did earlier on Codepen? */ }
          <input type="text" onChange={e => this.onSearchChange(e)} value={this.state.searchInput} />
          <input type="submit" value="Search" />
          { /* EXERCISE: add a button that clears the search term and just lists all posts */}
        </form>
      </div>
    )
  }
}
