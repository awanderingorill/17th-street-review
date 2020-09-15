exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        gcms {
            stories {
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
    data.gcms.stories.forEach(story => {
      const slug = story.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/components/story-page.js`),
        context: { story },
      })
    })
  }
