
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allGhostPost.edges

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Ghost Posts</h1>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.title}</h2>
            <p>{node.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allGhostPost {
      edges {
        node {
          id
          title
          excerpt
        }
      }
    }
  }

`

export default IndexPage
