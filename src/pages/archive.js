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
    width: 70vw;
    flex-flow: column;
  }

  @media ${device.mobileL} {
    max-width: 80vw;
    flex-flow: column;
    justify-content: center;
    margin-bottom: 1em;
  }
`

const IssueImgWrapper = styled.div`
  align-self: center;
`

const IssueImg = styled.img`
  max-width: 60vw;
  max-height: 90vh;

  @media ${device.tablet} {
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
    margin-top: 0;
  }
`

const ArchiveNav = styled.div`
  margin-left: 3em;

  @media ${device.tablet} {
    margin-left: 0;
  }

  @media ${device.mobileL} {
  }
`

const PieceListWrapper = styled.ul`
  padding: 0;
  max-height: 100vh;
  display: flex;
  flex-flow: column wrap;

  @media ${device.tablet} {
    max-height: 40vh;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-flow: column wrap;
    max-height: 400px;
    position: relative;
    width: fit-content;
    transform: none;
    width: 80vw;
    padding: 0;
    margin-bottom: 0;
  }
`

const PieceListItemWrapper = styled.li`
    list-style: none;

    @media ${device.tablet} {
      margin-right: 10px;
    }

    @media ${device.mobileL} {
      max-width: 160px;
    }
`

const PieceGenre = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-family: "Souvenir";
  font-size: 10px;
`

const PieceTitle = styled.p`
    font-family: "Souvenir";
    margin: 0 0 0.2rem 0;
    max-width: 220px;

    @media ${device.tablet} {
        margin: 0;
        max-width: 200px;
    }

    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const PieceAuthor = styled.p`
    margin: 0 0 2rem 0;

    @media ${device.mobileL} {
        font-size: 16px;
        margin-bottom: 1rem;
    }
`

const PieceList = props => (
  props.pieces.map(piece=>{
    const { title, author, slug, genre } = piece
    return (
      <PieceListItemWrapper>
        <Link to={slug}>
          <PieceGenre>{genre}</PieceGenre>
          <PieceTitle>{title}</PieceTitle>
          <PieceAuthor>{author}</PieceAuthor>
        </Link>
      </PieceListItemWrapper>
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
            issues(where: {currentIssue_not: true}, orderBy: createdAt_DESC) {
              title
              content {
                html
              }
              image {
                url
              }
              imageBy
              piece {
                title
                author
                slug
                genre
              }
            }
          }
        }
      `}
      render={data => (
          <ArchiveContainer>
              <ArchiveHeader>Archive</ArchiveHeader>
              {data.gcms.issues.map(issue => {
                  const { title, image, imageBy, piece } = issue
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
                        <PieceListWrapper>
                          <PieceList pieces={piece}/>
                        </PieceListWrapper>
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
