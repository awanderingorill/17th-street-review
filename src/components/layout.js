/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

import Header from "./header"
import { device } from "./device"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  html {
    display: flex;
    justify-content: center;
  }  

  body {
    color: #333231;
    background: #D5D5E2;
    font-family: "Inter";
    font-size: 16px;
    margin: 0;
    max-width: 1500px;
    min-width: 70vw;
    line-height: 1.4rem;
  }

  a {
    text-decoration: none;
    color: #333231;
  }

  footer {
    text-align: center;
    margin-bottom: 3rem;
  }

  table {
    max-width: 600px;
  }

  td {
    width: 50%;
    padding-right: 20px;
    vertical-align: top;
  }

  p {
    max-width: 600px;
  }

  @media ${device.mobileL} {
    body {
      font-size: 14px;
      line-height: 1.2rem;
    }
  }
`

const Footer = styled.footer`
  @media ${device.mobileL} {
    font-size: 16px;
    margin: 2rem;
  }
`

const SiteWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SiteWrapper>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer>
        © {new Date().getFullYear()} 17th Mag
      </Footer>
    </SiteWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
