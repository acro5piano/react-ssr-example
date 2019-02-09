// @flow

import express from 'express'
// import App from '../src/App'
import { PostList } from '../src/components/PostList'
import { Post } from '../src/components/Post'
import path from 'path'
import { withHelmet } from './ssr'

const app = express()

app.use(require('cors')())
app.use(express.static(path.join(__dirname, '../build')))

const posts = [
  {
    title: 'foo',
    content: 'foofoofoo',
  },
  {
    title: 'bar',
    content: 'barbarbar',
  },
]

app.get('/posts', (req, res) => {
  res.send(withHelmet(PostList, { posts }))
})

app.get('/posts/1', (req, res) => {
  res.send(withHelmet(Post, { post: posts[0] }))
})

app.get('/api/posts', (req, res) => {
  res.send(posts)
})

app.listen(20589, () => {
  console.log('listening')
})
