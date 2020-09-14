import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { StaticQuery } from "gatsby"

const NavWrapper = styled.ul`
  font-size: 16px;
  list-style: none;
  margin: 0;
  padding: 2rem;
`

const NavItemWrapper = styled.li`
`

const StoryTitle = styled.p`
    font-family: "Souvenir";
`

const StoryAuthor = styled.p`
`

const NavItem = props => (
    <NavItemWrapper>
        <Link to={props.slug}>
            <StoryTitle>{props.title}</StoryTitle>
            <StoryAuthor>{props.author}</StoryAuthor>
        </Link>
    </NavItemWrapper>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default function Nav () {
    return (
        <StaticQuery
            query={graphql`
                query {
                    gcms {
                        stories {
                            title
                            author
                        }
                    }
                }
            `}
            render={data => (
                <NavWrapper>
                    {data.gcms.stories.map(story => {
                        const { title, author } = story
                        return (
                            <NavItem title={title} author={author} />
                    )
                    })}
                </NavWrapper>
            )}
        />
    )
}
 