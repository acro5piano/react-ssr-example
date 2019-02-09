import React, { Component } from 'react'
import { PostList } from './components/PostList'
// import './App.css'

export default class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    fetch('http://localhost:20589/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PostList posts={this.state.posts} />
        </header>
      </div>
    )
  }
}
