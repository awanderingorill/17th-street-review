import React from "react"
import { StaticQuery } from "gatsby"
import styled from "styled-components"

import GlobalFonts from "../fonts/fonts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Piece from "../components/piece"
import { device } from "../components/device"
import Nav from "../components/nav"

const IndexContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
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
  font-family: "Windsor";
  color: transparent;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;
  font-size: 40px;
  margin: 0 0 1rem 0;

  @media ${device.mobileL} {
    font-size: 20px;
    color: black;
    -webkit-text-stroke-width: 0;
  }
`

const IssueContent = styled.div`
  & > p {
    margin-bottom: 0;
  }

  @media ${device.mobileL} {
    font-size: 14px;
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
  align-items: flex-start;
  justify-content: center;

  @media ${device.tablet} {
    flex-flow: column;
    left: 0;
  }
`

const IssueImg = styled.img`
  max-width: 45vw;
  max-height: 75vh;

  @media ${device.tablet} {
    max-width: 70vw;
  }

  @media ${device.mobileL} {
    max-width: 80vw;
  }
`

const ImageBy = styled.p`
  display: flex;
  font-size: 14px;
  margin: 0;
`

const ImgWrapper = styled.div`
  margin-bottom: 2em;

  @media ${device.tablet} {
    order: 2;
  }

  @media ${device.mobileL} {
    margin-bottom: 1em;
  }
`

const IndexPage = () => (
  <Layout>
      <SEO title="Winter 2023"/>
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
                  pieces(where: {homepagePiece: true}) {
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
                            <IssueImg src={image.url}/>
                            <ImageBy>{imageBy}</ImageBy>
                          </ImgWrapper>
                          <Nav/>
                        </NavAndImgWrapper>
                      </>
                    )
                })}
                {/* {data.gcms.pieces.map(piece => {
                    const { title, author, content } = piece
                    return (
                      <Piece
                        pieceTitle={title}
                        pieceAuthor={author}
                        pieceContent={content.html}
                      />
                    )
                })} */}
            </IndexContainer>
        )}
      />
  </Layout>
)

export default IndexPage
