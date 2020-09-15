exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    data.allMarkdownRemark.edges.forEach(edge => {
      const slug = edge.node.fields.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/blog-post.js`),
        context: { slug: slug },
      })
    })
  }
