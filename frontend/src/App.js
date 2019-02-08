import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    posts: []
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
          {this.state.posts.map(post => <div id={post.title}>{post.title}</div>)}
        </header>
      </div>
    );
  }
}

export default App;
