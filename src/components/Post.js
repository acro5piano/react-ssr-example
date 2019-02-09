import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Container = styled.div`
  background: orange;
  margin-top: 12px;
`

const Title = styled.div`
  color: #333;
`

export const Post = ({ post }) => (
  <div>
    <Helmet>
      <title>{post.title}</title>
      <title>{post.title}</title>
      <meta name="description" content={post.title} />
    </Helmet>
    <Container key={post.title}>
      <Title>{post.title}</Title>
      <Title>{post.content}</Title>
    </Container>
  </div>
)
