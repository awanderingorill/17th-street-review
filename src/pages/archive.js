import React from "react"
import { Link } from "gatsby"
import { StaticQuery } from "gatsby"
import styled from "styled-components"

import GlobalFonts from "../fonts/fonts"
import Layout from "../components/layout"
import { device } from "../components/device"

const ArchiveContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`

const ArchiveHeader = styled.p`
  font-family: "Souvenir";
  text-align: center;
  text-transform: uppercase;
  font-size: 25px;
  margin: 0;
  margin-bottom: 2em;

  @media ${device.mobileL} {
    font-size: 20px;
    margin-bottom: 1em;
  }
`

const IssueWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 3em;
  align-items: flex-start;

  @media ${device.tablet} {
    max-width: 70vw;
    flex-flow: row;
  }

  @media ${device.mobileL} {
    justify-content: center;
    margin-bottom: 1em;
  }
`

const IssueImgWrapper = styled.div`
`

const IssueImg = styled.img`
  max-width: 60vw;
  max-height: 100vh;

  @media ${device.tablet} {
    max-width: 40vw;
    flex-flow: row;
  }

  @media ${device.mobileL} {
    max-width: 80vw;
  }
`

const IssueImgBy = styled.p`
  justify-content: flex-end;
  display: flex;
  font-size: 14px;
  margin: 0;
`

const IssueTitle = styled.p`
  font-size: 25px;
  font-family: "Souvenir";
  margin: 0;
  margin-bottom: 1em;

  @media ${device.mobileL} {
    font-size: 20px;
    margin-top: 1em;
  }
`

const ArchiveNav = styled.div`
  margin-left: 3em;

  @media ${device.mobileL} {
    margin-left: 0;
  }
`

const StoryListWrapper = styled.ul`
  padding: 0;

  @media ${device.mobileL} {
    display: flex;
    flex-flow: column wrap;
    max-height: 230px;
    position: relative;
    width: fit-content;
    transform: none;
    width: 80vw;
    padding: 0;
    margin-bottom: 0;
  }
`

const StoryListItemWrapper = styled.li`
    list-style: none;

    @media ${device.mobileL} {
      max-width: 160px;
    }
`

const StoryTitle = styled.p`
    font-family: "Souvenir";
    margin: 0 0 0.2rem 0;

    @media ${device.tablet} {
        margin: 0;
    }

    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const StoryAuthor = styled.p`
    margin: 0 0 2rem 0;

    @media ${device.mobileL} {
        font-size: 16px;
        margin-bottom: 1rem;
    }
`

const StoryList = props => (
  props.stories.map(story=>{
    const { title, author, slug } = story
    return (
      <StoryListItemWrapper>
        <Link to={slug}>
          <StoryTitle>{title}</StoryTitle>
          <StoryAuthor>{author}</StoryAuthor>
        </Link>
      </StoryListItemWrapper>
    )
  })
)

const ArchivePage = () => (
  <Layout>
    <GlobalFonts />
    <StaticQuery
      query={graphql`
        query {
          gcms {
            issues(where: {currentIssue_not: true}) {
              title
              content {
                html
              }
              image {
                url
              }
              imageBy
              story {
                title
                author
                slug
              }
            }
          }
        }
      `}
      render={data => (
          <ArchiveContainer>
              <ArchiveHeader>Archive</ArchiveHeader>
              {data.gcms.issues.map(issue => {
                  const { title, image, imageBy, story } = issue
                  return (
                    <IssueWrapper>
                      <IssueImgWrapper>
                        <IssueImg src={image.url}/>
                        <IssueImgBy>
                          {imageBy}
                        </IssueImgBy>
                      </IssueImgWrapper>
                      
                      <ArchiveNav>
                        <IssueTitle>{title}</IssueTitle>
                        <StoryListWrapper>
                          <StoryList stories={story}/>
                        </StoryListWrapper>
                      </ArchiveNav>
                    </IssueWrapper>
                  )
              })}
          </ArchiveContainer>
      )}
    />
  </Layout>
)

export default ArchivePage
