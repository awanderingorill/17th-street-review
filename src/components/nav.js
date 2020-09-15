import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { StaticQuery } from "gatsby"

const NavWrapper = styled.ul`
    font-size: 18px;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
`

const NavItemWrapper = styled.li`
`

const StoryTitle = styled.p`
    font-family: "Souvenir";
    margin: 0 0 0.2rem 0;
`

const StoryAuthor = styled.p`
    margin: 0 0 2rem 0;
`

const NavItem = props => (
    <NavItemWrapper>
        <Link to={props.slug}>
            <StoryTitle>{props.title}</StoryTitle>
            <StoryAuthor>{props.author}</StoryAuthor>
        </Link>
    </NavItemWrapper>
)

export default function Nav () {
    return (
        <StaticQuery
            query={graphql`
                query {
                    gcms {
                        stories {
                            title
                            author
                            slug
                        }
                    }
                }
            `}
            render={data => (
                <NavWrapper>
                    {data.gcms.stories.map(story => {
                        const { title, author, slug } = story
                        return (
                            <NavItem title={title} author={author} slug={slug}/>
                        )
                    })}
                </NavWrapper>
            )}
        />
    )
}
 