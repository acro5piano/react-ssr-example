import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: orange;
  margin-top: 12px;
`

const Title = styled.div`
  color: #333;
`

export const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <Container key={post.title}>
        <Title>{post.title}</Title>
      </Container>
    ))}
  </div>
)
