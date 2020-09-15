import React from "react"
import { Link } from "gatsby"
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

  @media ${device.tablet} {
    max-width: 70vw;
  }
`

const IndexPage = () => (
  <Layout>
    <GlobalFonts />
    <SEO title="17th Street Review | Winter 2020"/>
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
              {data.gcms.pages.map(page => {
                  const { subtitle, content, homeImage } = page
                  return (
                    <>
                      <Intro
                        subTitle={subtitle}
                        indexContent={content.text}
                      />
                      <Nav/>
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
