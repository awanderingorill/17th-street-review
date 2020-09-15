import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
`

const Logo = styled.h1`
  font-family: "Souvenir";
  font-size: 40px;
  line-height: 92.3%;
  text-align: center;
  text-transform: uppercase;
  color: #333231;
  text-decoration: none;
  width: 350px;
  margin: 0;
  padding: 2rem;
  z-index: 1000;
`

const ArchiveAndAbout = styled.ul`
  font-size: 16px;
  list-style: none;
  margin: 0;
  padding: 2rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
      <Link to="/">
        <Logo>
          {siteTitle}
        </Logo>
      </Link>
      <ArchiveAndAbout>
        <li>
          <Link to="/archive">
            Archive
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
      </ArchiveAndAbout>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
