import React, { useState } from "react"
import styled from "styled-components"

import GlobalFonts from "../fonts/fonts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Story from "../components/story"
import Nav from "../components/nav"

const StoryPageContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 70vw;
`

const StoryPageNavWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY (-50%);
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
        <StoryPageNavWrapper>
         <Nav/>
        </StoryPageNavWrapper>
      </Layout>
    )
  }

export default StoryPage
