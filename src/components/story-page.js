import React, { useState } from "react"
import styled from "styled-components"

import GlobalFonts from "../fonts/fonts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Story from "../components/story"

const StoryPageContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 70vw;
`

const StoryPage = ({ pageContext }) => {
    const [story, updateStory] = useState(pageContext.story)
    return (
      <Layout>
        <GlobalFonts />
        <SEO title={story.title}/>
        <StoryPageContainer>
            <Story
                storyTitle={story.title}
                storyAuthor={story.author}
                storyContent={story.content.html}
            />
        </StoryPageContainer>
      </Layout>
    )
  }

export default StoryPage
