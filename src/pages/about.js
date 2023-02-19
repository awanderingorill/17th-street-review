import React from "react"
import { StaticQuery } from "gatsby"
import styled from "styled-components"

import GlobalFonts from "../fonts/fonts"
import Layout from "../components/layout"
import { device } from "../components/device"

const AboutWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    align-self: center;
    justify-content: center;
    max-width: 45vw;

    @media ${device.tablet} {
      max-width: 70vw;
    }

    @media ${device.mobileL} {
        max-width: 80vw;
    }
`

const AboutHeader = styled.p`
    font-family: "Windsor";
    color: transparent;
    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: black;
    text-align: center;
    font-size: 40px;
    margin-bottom: 1rem;

  @media ${device.mobileL} {
    font-size: 20px;
    margin-bottom: 1em;
    color: black;
    -webkit-text-stroke-width: 0;
  }
`

const AboutContent = styled.div`
    margin-bottom: 2em;

    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const AboutPage = () => (
  <Layout>
    <GlobalFonts />
    <StaticQuery
      query={graphql`
        query {
          gcms {
            pages(where: {slug: "/about"}) {
                content {
                    html
                }
            }
          }
        }
      `}
      render={data => (
          <AboutWrapper>
              <AboutHeader>About</AboutHeader>
              {data.gcms.pages.map(page => {
                  const { content } = page
                  return (
                    <AboutContent dangerouslySetInnerHTML={{ __html: content.html }}/>
                  )
              })}
          </AboutWrapper>
      )}
    />
  </Layout>
)

export default AboutPage
