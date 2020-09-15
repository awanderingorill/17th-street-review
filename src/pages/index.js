import React from "react"
import { StaticQuery } from "gatsby"
import styled from "styled-components"

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

  @media ${device.mobileL} {
    font-size: 20px;
    margin-top: 0;
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

  @media ${device.tablet} {
    flex-flow: column;
    left: 0;
  }
`

const IssueImg = styled.img`
  max-width: 63vw;
  position: relative;
  z-index: -1;
  margin-bottom: 4em;

  @media ${device.tablet} {
    max-width: 70vw;
    order: 2;
  }

  @media ${device.mobileL} {
    max-width: 80vw;
    margin-bottom: 2em;
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
                    const { title, content, image } = issue
                    return (
                      <>
                        <Intro
                          issueTitle={title}
                          issueContent={content.html}
                        />
                        <NavAndImgWrapper>
                          <IssueImg src={image.url}/>
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
