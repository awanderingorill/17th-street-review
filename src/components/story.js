import React from "react"
import styled from "styled-components"
import { device } from "./device"

const StoryWrapper = styled.div`
  margin: 5em 0 3em 0;
  max-width: 45vw;
  margin-top: 2em;

  @media ${device.tablet} {
    max-width: 70vw;
  }
`

const StoryTitle = styled.p`
  font-family: "Souvenir";
  font-size: 25px;
  text-align: center;
  margin-bottom: 0.3rem;
`

const StoryAuthor = styled.p`
  text-align: center;
  margin-top: 0;
`

const StoryContent = styled.div`
`

const Story = props => (
  <StoryWrapper>
    <StoryTitle>{props.storyTitle}</StoryTitle>
    <StoryAuthor>{props.storyAuthor}</StoryAuthor>
    <StoryContent dangerouslySetInnerHTML={{ __html: props.storyContent }}/>
  </StoryWrapper>
)

export default Story