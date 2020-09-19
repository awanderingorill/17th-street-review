exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        gcms {
            pieces {
                title
                author
                content {
                    html
                }
                slug
            }
        }
      }
    `)
    data.gcms.pieces.forEach(piece => {
      const slug = piece.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/components/piece-page.js`),
        context: { piece },
      })
    })
  }
