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
import Nav from "./nav"
import { device } from "./device"

const GlobalStyle = createGlobalStyle`
  body {
    color: #333231;
    background: #FFFBF4;
    font-family: "Clearface";
    font-size: 18px;
    line-height: 127.5%;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #333231;
  }

  a:hover {
    transform: rotate(-4deg);
  }

  footer {
    text-align: center;
  }
`

const SiteWrapper = styled.div`
  display: flex;
  flex-flow: column;

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
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </SiteWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
