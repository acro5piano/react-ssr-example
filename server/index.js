import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
// import App from '../src/App'
import { PostList } from '../src/components/PostList'
import { Post } from '../src/components/Post'
import { ServerStyleSheet } from 'styled-components'
import path from 'path'
import { Helmet } from 'react-helmet'

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

const getStatic = a => /\/static.+\.js$/.test(a)
const assets = Object.values(require('../build/asset-manifest.json')).filter(getStatic)

const template = ({ title, meta, styles, body }) => `
<!DOCTYPE html>
<html>
  <head>
    ${title}
    ${styles}
    ${meta}
  </head>
  <body style="margin:0">
    <div id="root">${body}</div>
  </body>
  ${assets.map(a => `<script src="${a}"></script>`).join('')}
</html>
`

app.get('/posts', (req, res) => {
  const sheet = new ServerStyleSheet()
  const body = renderToString(sheet.collectStyles(<PostList posts={posts} />))
  const styles = sheet.getStyleTags()
  const helmet = Helmet.renderStatic()
  const title = helmet.title.toString()
  res.send(template({ title, styles, body }))
})

app.get('/posts/1', (req, res) => {
  const sheet = new ServerStyleSheet()
  const body = renderToString(sheet.collectStyles(<Post post={posts[0]} />))
  const styles = sheet.getStyleTags()
  const helmet = Helmet.renderStatic()
  const title = helmet.title.toString()
  const meta = helmet.meta.toString()
  res.send(template({ title, meta, styles, body }))
})

app.get('/api/posts', (req, res) => {
  res.send(posts)
})

app.listen(20589, () => {
  console.log('listening')
})
