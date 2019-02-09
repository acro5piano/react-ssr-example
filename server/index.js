import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

const app = express()

console.log(renderToString(<App />))

app.use(require('cors')())

app.get('/posts', (req, res) => {
  res.send('ok')
})

app.get('/api/posts', (req, res) => {
  res.send([
    {
      title: 'hoge',
      content: 'fugafuga',
    },
  ])
})

app.listen(20589, () => {
  console.log('listening')
})
