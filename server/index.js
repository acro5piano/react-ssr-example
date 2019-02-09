import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
// import App from '../src/App'
import { PostList } from '../src/components/PostList'
import { ServerStyleSheet } from 'styled-components'
import path from 'path'

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
console.log(assets)

const template = ({ title, styles, body }) => `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    ${styles}
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
  const title = 'Hello'
  const styles = sheet.getStyleTags()
  res.send(template({ title, styles, body }))
})

app.get('/api/posts', (req, res) => {
  res.send(posts)
})

app.listen(20589, () => {
  console.log('listening')
})
