import React from "react"
import { Link } from "gatsby"
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
`

const AboutHeader = styled.p`
    font-family: "Souvenir";
    font-size: 25px;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 1em;
`

const AboutContent = styled.div``

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
