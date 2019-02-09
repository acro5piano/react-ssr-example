// @flow

import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
const assetFiles = require('../build/asset-manifest.json')

const getStatic = (a: string) => /\/static.+\.js$/.test(a)
// $FlowFixMe
const assets = Object.values(assetFiles).filter(getStatic)

const template = ({ title, styles, body, meta }) => `
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

export const withHelmet = (App: any, props: any) => {
  const sheet = new ServerStyleSheet()
  const body = renderToString(sheet.collectStyles(<App {...props} />))
  const styles = sheet.getStyleTags()
  const helmet = Helmet.renderStatic()
  const title = helmet.title.toString()
  const meta = helmet.meta.toString()
  return template({ title, styles, body, meta })
}
