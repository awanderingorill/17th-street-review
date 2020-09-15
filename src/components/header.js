import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { device } from "./device"

const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;

  @media ${device.tablet} {
    justify-content: center;
  }
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

  @media ${device.mobileL} {
    font-size: 30px;
  }
`
const HeaderNav = styled.ul`
  font-size: 16px;
  list-style: none;
  margin: 0;
  padding: 2rem;

  @media ${device.tablet} {
    position: absolute;
    right: 50px;
  }

  @media ${device.mobileL} {
    font-size: 14px;
    padding: 2rem 1rem;
    right: 0;
  }
`
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
      <Link to="/">
        <Logo>
          {siteTitle}
        </Logo>
      </Link>
      <HeaderNav>
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
        <li>
          <Link to="/submit">
            Submit
          </Link>
        </li>
      </HeaderNav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
