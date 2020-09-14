import React from "react"
import { Link } from "gatsby"
import { StaticQuery } from "gatsby"
import styled from "styled-components"

import GlobalFonts from "../fonts/fonts"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`
const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`
const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`
const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`
const Excerpt = styled.p`
  margin: 0;
`
// const User = props => (
//   <UserWrapper>
//     <Avatar src={props.avatar} alt="" />
//     <Description>
//       <Username>{props.username}</Username>
//       <Excerpt>{props.excerpt}</Excerpt>
//     </Description>
//   </UserWrapper>
// )


const IndexContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 70vw;
`

const IntroWrapper = styled.div`
  margin: 5em 0 3em 0;
  max-width: 45vw;
`

const IntroTitle = styled.p`
  font-family: "Souvenir";
  font-size: 25px;
`

const IntroContent = styled.p`
`

const Intro = props => (
  <IntroWrapper>
    <IntroTitle>{props.subTitle}</IntroTitle>
    <IntroContent>{props.indexContent}</IntroContent>
  </IntroWrapper>
)

const IntroImg = styled.img`
  max-width: 60vw;
  position: relative;
  z-index: -1;
`

const StoryWrapper = styled.div`
  margin: 5em 0 3em 0;
  max-width: 45vw;
`

const StoryTitle = styled.p`
  font-family: "Souvenir";
  font-size: 25px;
  text-align: center;
`

const StoryAuthor = styled.p`
  text-align: center;
`

const StoryContent = styled.div`
`

const Story = props => (
  <StoryWrapper>
    <StoryTitle>{props.storyTitle}</StoryTitle>
    <StoryAuthor>{props.storyAuthor}</StoryAuthor>
    <StoryContent dangerouslySetInnerHTML={{ __html: props.storyContent }} />
  </StoryWrapper>
)

// export default function UsersList() {
//   return (
//     <Container>
//       <h1>About Styled Components</h1>
//       <p>Styled Components is cool</p>
//       <User
//         username="Jane Doe"
//         avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
//         excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//       />
//       <User
//         username="Bob Smith"
//         avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
//         excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
//       />
//     </Container>
//   )
// }


const IndexPage = () => (
  <Layout>
    <GlobalFonts />
    <SEO title="17th Street Review"/>
      <StaticQuery
              query={graphql`
                  query {
                      gcms {
                        pages(where: {slug: "/"}) {
                          subtitle
                          homeImage {
                            url
                          }
                          content {
                            text
                          }
                        }
                      }
                      gcms {
                        stories(first: 1) {
                          title
                          author
                          content {
                            html
                          }
                        }
                      }
                  }
              `}
              render={data => (
                  <IndexContainer>
                      {data.gcms.pages.map(page => {
                          const { subtitle, content, homeImage } = page
                          return (
                            <>
                              <Intro
                                subTitle={subtitle}
                                indexContent={content.text}
                              />
                              <IntroImg src={homeImage.url}/>
                            </>
                          )
                      })}
                      {data.gcms.stories.map(story => {
                          const { title, author, content } = story
                          return (
                            <Story
                              storyTitle={title}
                              storyAuthor={author}
                              storyContent={content.html}
                            />
                          )
                      })}
                  </IndexContainer>
              )}
          />
  </Layout>
)

export default IndexPage
