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
  padding: 2rem 0 0 4rem;

  @media ${device.tablet} {
    justify-content: center;
  }

  @media ${device.mobileL} {
    padding-bottom: 2rem;
  }
`
const Logo = styled.h1`
  font-family: "Windsor";
  font-size: 40px;
  color: #333231;
  text-decoration: none;
  width: 350px;
  margin: 0;
  z-index: 1000;

  @media ${device.mobileL} {
    font-size: 30px;
  }
`

const SubTitle = styled.p`
  font-family: "Inter";
  font-size: 16px;
`

const HeaderNav = styled.ul`
  font-size: 16px;
  list-style: none;
  margin: 0;
  padding-right: 5rem;

  @media ${device.tablet} {
    position: absolute;
    right: 0;
  }

  @media ${device.mobileL} {
    font-size: 14px;
    padding: 0.2rem 3rem;
    right: 0;
  }
`
const Header = ({ siteTitle }) => (
  <HeaderWrapper>
      <Link to="/">
        <Logo>
          {siteTitle}
        </Logo>
        <subTitle>
          A literary mag
        </subTitle>
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
