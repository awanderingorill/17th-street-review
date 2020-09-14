import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Logo = styled.h1`
  font-family: "Souvenir";
  font-size: 40px;
  line-height: 92.3%;
  text-align: center;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.80);
  text-decoration: none;
  width: 300px;
`

const Header = ({ siteTitle }) => (
  <header>
    <div>
        <Link to="/">
          <Logo>
            {siteTitle}
          </Logo>
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
