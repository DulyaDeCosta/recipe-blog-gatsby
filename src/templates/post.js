import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PostTemplate = ({ data }) => {
  const post = data.ghostPost

  return (
    <Layout>
      <SEO title={post.title} />
      <article>
        <h1>{post.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      html
    }
  }
`

export default PostTemplate
