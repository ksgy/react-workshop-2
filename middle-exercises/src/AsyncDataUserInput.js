import React, { Component } from 'react'

// make sure you've got the API running first!

export default class AsyncDataExercise extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // EXERCISE: you'll need to store the user's search term in state
      posts: undefined,
      q: ''
    }
    this.onChange = this.onChange.bind(this)
    this.resetForm = this.resetForm.bind(this)

  }


  onChange(e) {
    this.setState({
      q: e.target.value
    })
  }


  resetForm(e) {
    e.preventDefault()
    this.setState({
      q: ''
    }, this.fetchPosts)

  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts() {
    // EXERCISE: how can you change this search query based on what
    // the user has typed into the text field
    fetch(`http://localhost:3004/posts?q=${this.state.q}`)
      .then(data => data.json())
      .then(posts => {
        this.setState({
          posts: posts,
        })
      })
  }

  renderPosts() {
    return (
      <ul>
        { this.state.posts.filter((item) => {
          return item.title.toLowerCase().indexOf(this.state.q.toLowerCase()) !== -1
        }).map(post => (
          // EXERCISE: abstract this into its own component
          // and fill out the propTypes
          <li key={post.id}><p>{post.title}</p></li>
        )) }
      </ul>
    )
  }
  renderNoPosts() {
    return (
      <div>No results :(</div>
    )
  }
  render() {
    return (
      <div>
        { !this.state.posts && <p>Loading</p>}
        { this.state.posts && this.state.posts.length !== 0 && this.renderPosts() }
        { this.state.posts && this.state.posts.length === 0 && this.renderNoPosts() }
        { /* EXERCISE: bind to the onSubmit event on this form so we can search when the user submits */ }
        { /* EXERCISE: you'll need to bind to the onChange event of the input to know the latest value that the user has typed */}
        <form onSubmit={this.onSubmit}>
          { /* EXERCISE: csn you make this input auto focus when the user visits the page, like we did earlier on Codepen? */ }
          <input type="text" onChange={this.onChange} value={this.state.q} />
          <input type="reset" onClick={this.resetForm} />
          { /* EXERCISE: add a button that clears the search term and just lists all posts */}
        </form>
      </div>
    )
  }
}
