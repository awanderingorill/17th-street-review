import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StaticQuery } from "gatsby"
import { device } from "./device"
import rightArrow from "../images/right-arrow.svg"

const NavWrapperWrapper = styled.div`
    font-size: 18px;
    margin: 0;
    padding: 0;
    padding-left: 4em;
    width: 230px;

    @media ${device.tablet} {
        display: flex;
        flex-flow: column wrap;
        max-height: 230px;
        position: relative;
        width: fit-content;
        transform: none;
        width: 70vw;
        padding: 0;
        margin-top: 1em;
    }

    @media ${device.mobileL} {
        width: 80vw;
        max-height: initial;
    }
`

const NavWrapper = styled.ul`
    list-style: none;
    padding: 0;

    @media ${device.tablet} {
        position: relative;
    }
`

const NavItemWrapper = styled.li`    
    @media ${device.mobileL} {
        max-width: 40vw;
    }
`

const PieceGenre = styled.p`
    margin: 0;
    text-transform: uppercase;
    font-family: "Windsor";
    font-size: 10px;
`

const PieceTitle = styled.p`
    font-family: "Windsor";
    margin: 0 0 0.2rem 0;
    max-width: 250px;

    @media ${device.tablet} {
        margin: 0;
    }

    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const PieceAuthor = styled.p`
    margin: 0 0 2rem 0;

    @media ${device.mobileL} {
        font-size: 14px;
        margin-bottom: 1rem;
    }
`


const NavItem = props => (
    <NavItemWrapper>
        <Link to={"https://17th-mag.com/" + props.slug}>
            <PieceGenre>{props.genre}</PieceGenre>
            <PieceTitle>{props.title}</PieceTitle>
            <PieceAuthor>{props.author}</PieceAuthor>
        </Link>
    </NavItemWrapper>
)

export default function Nav () {
    return (
        <StaticQuery
            query={graphql`
                query {
                    gcms {
                        pieces(where: {issue: {currentIssue: true}}) {
                            title
                            author
                            slug
                            genre
                        }
                    }
                }
            `}
            render={data => (
                <NavWrapperWrapper>
                    <NavWrapper>
                        {data.gcms.pieces.map(piece => {
                            const { title, author, slug, genre } = piece
                            return (
                                <NavItem title={title} author={author} slug={slug} genre={genre}/>
                            )
                        })}
                    </NavWrapper>
                </NavWrapperWrapper>
                
            )}
        />
    )
}
 