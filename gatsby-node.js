/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }


const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allGhostPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const posts = result.data.allGhostPost.edges

  posts.forEach(({ node }) => {
    createPage({
      path: `/post/${node.slug}/`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
