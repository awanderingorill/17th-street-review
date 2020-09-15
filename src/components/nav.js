import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { StaticQuery } from "gatsby"
import { device } from "./device"

const NavWrapper = styled.ul`
    font-size: 18px;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    
    @media ${device.tablet} { 
        display: flex;
        flex-flow: column wrap;
        max-height: 230px;
        position: relative;
        width: fit-content;
        transform: none;
        width: 70vw;
    }

    @media ${device.mobileL} {
        width: 80vw;
    }
`

const NavItemWrapper = styled.li`
    @media ${device.mobileL} {
        max-width: 40vw;
    }
`

const StoryTitle = styled.p`
    font-family: "Souvenir";
    margin: 0 0 0.2rem 0;

    @media ${device.tablet} {
        margin: 0;
    }

    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const StoryAuthor = styled.p`
    margin: 0 0 2rem 0;

    @media ${device.mobileL} {
        font-size: 16px;
        margin-bottom: 1rem;
    }
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
 