import React from "react"
import { StaticQuery } from "gatsby"
import styled from "styled-components"
import { keyframes } from "styled-components"

import GlobalFonts from "../fonts/fonts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Story from "../components/story"
import { device } from "../components/device"
import Nav from "../components/nav"

const IndexContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 70vw;

  @media ${device.tablet} {
    max-width: 100vw;
    justify-content: center;
    align-items: center;
  }
`

const IntroWrapper = styled.div`
  margin: 5em 0 3em 0;
  max-width: 45vw;
  margin: 0;
  margin-bottom: 3em;

  @media ${device.tablet} {
    max-width: 70vw;
    margin: 0;
  }

  @media ${device.mobileL} {
    max-width: 80vw;
  }
`

const IssueTitle = styled.p`
  font-family: "Souvenir";
  font-size: 25px;
  margin-top: 0;

  @media ${device.mobileL} {
    font-size: 20px;
  }
`

const IssueContent = styled.div`
  @media ${device.mobileL} {
    font-size: 16px;
  }
`

const Intro = props => (
  <IntroWrapper>
    <IssueTitle>{props.issueTitle}</IssueTitle>
    <IssueContent dangerouslySetInnerHTML={{ __html: props.issueContent }}/>
  </IntroWrapper>
)

const NavAndImgWrapper = styled.div`
  display: flex;
  position: relative;
  left: 300px;
  align-items: flex-start;

  @media ${device.tablet} {
    flex-flow: column;
    left: 0;
  }
`

const IssueImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63vw;
  height: 63vw;
  background: linear-gradient(180deg, #E4C3B5 0%, #FFF0A3 100%);

  @media ${device.tablet} {
    width: 70vw;
  }

  @media ${device.mobileL} {
    width: 80vw;
  }
`

const Pulse = keyframes`
  to {
      transform: scale(1.1);
  }
`

const IssueImgRadialGradient = styled.div`
  height: 50vw;
  width: 50vw;
  background: radial-gradient(50% 50% at 50% 50%, #5546FF 45.31%, rgba(34, 118, 32, 0.29) 73.44%, rgba(166, 211, 170, 0) 100%);
  animation: ${Pulse} 1s ease-in-out infinite alternate;
`

const ImageBy = styled.p`
  justify-content: flex-end;
  display: flex;
  font-size: 14px;
  margin: 0;
`

const ImgWrapper = styled.div`
  margin-bottom: 3em;

  @media ${device.tablet} {
    order: 2;
  }

  @media ${device.mobileL} {
    margin-bottom: 1em;
  }
`

const IndexPage = () => (
  <Layout>
      <SEO title="17th Street Review | Winter 2020"/>
      <GlobalFonts />
      <StaticQuery
        query={graphql`
            query {
                gcms {
                  issues(where: {currentIssue: true}) {
                    title
                    content {
                      html
                    }
                    image {
                      url
                    }
                    imageBy
                  }
                }
                gcms {
                  stories(where: {homepageStory: true}) {
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
                {data.gcms.issues.map(issue => {
                    const { title, content, image, imageBy } = issue
                    return (
                      <>
                        <Intro
                          issueTitle={title}
                          issueContent={content.html}
                        />
                        <NavAndImgWrapper>
                          <ImgWrapper>
                            <IssueImg>
                              <IssueImgRadialGradient>
                              </IssueImgRadialGradient>
                            </IssueImg>
                            <ImageBy>{imageBy}</ImageBy>
                          </ImgWrapper>
                          <Nav/>
                        </NavAndImgWrapper>
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
