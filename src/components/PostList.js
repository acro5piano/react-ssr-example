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

export const PostList = ({ posts }) => (
  <div>
    <Helmet>
      <title>Welcome to post list</title>
    </Helmet>
    {posts.map(post => (
      <Container key={post.title}>
        <Title>{post.title}</Title>
      </Container>
    ))}
  </div>
)
