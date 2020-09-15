import React from "react"
import styled from "styled-components"
import { device } from "./device"

const StoryWrapper = styled.div`
  margin: 0 0 3em 0;
  max-width: 45vw;

  @media ${device.tablet} {
    max-width: 70vw;
  }
`

const StoryTitle = styled.p`
  font-family: "Souvenir";
  font-size: 25px;
  text-align: center;
  margin: 0;
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