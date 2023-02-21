import React, { useState } from "react"
import styled from "styled-components"

import GlobalFonts from "../fonts/fonts"
import Layout from "./layout"
import SEO from "./seo"
import Piece from "../components/piece"
import Nav from "./nav"
import { device } from "./device"

const PiecePageContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 70vw;

  @media ${device.mobileL} {
    max-width: 80vw;
  }
`

const PiecePageNavWrapper = styled.div`
  position: fixed;
  left: 0px;
  top: 25%;

  @media ${device.tablet} {
    position: relative;
    right: 0;
    top: 0;
    transform: none;
  }
`

const PiecePage = ({ pageContext }) => {
    const [piece, updatePiece] = useState(pageContext.piece)
    return (
      <Layout>
        <GlobalFonts />
        <SEO title={piece.title}/>
        <PiecePageContainer>
            <Piece
                pieceTitle={piece.title}
                pieceAuthor={piece.author}
                pieceContent={piece.content.html}
            />
        </PiecePageContainer>
        <PiecePageNavWrapper>
         <Nav/>
        </PiecePageNavWrapper>
      </Layout>
    )
  }

export default PiecePage
