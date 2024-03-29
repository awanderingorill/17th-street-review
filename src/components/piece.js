import React from "react"
import styled from "styled-components"
import { device } from "./device"

const PieceWrapper = styled.div`
  margin: 0 0 2em 0;
  max-width: 45vw;
  align-self: center;

  @media ${device.tablet} {
    max-width: 70vw;
  }

  @media ${device.mobileL} {
    max-width: 80vw;
    margin-bottom: 1em;
  }
`

const PieceTitle = styled.p`
  font-family: "Windsor";
  font-size: 30px;
  color: transparent;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;
  text-align: center;
  margin: 0;

  @media ${device.mobileL} {
    font-size: 20px;
    color: black;
    -webkit-text-stroke-width: 0;
  }
`

const PieceAuthor = styled.p`
  text-align: center;
  margin-top: 0;
  margin-bottom: 1em;

  @media ${device.mobileL} {
    font-size: 14px;
    margin-bottom: 1em;
  }
`

const PieceContent = styled.div`
  @media ${device.mobileL} {
    font-size: 14px;
  }
`

const Piece = props => (
  <PieceWrapper>
    <PieceTitle>{props.pieceTitle}</PieceTitle>
    <PieceAuthor>{props.pieceAuthor}</PieceAuthor>
    <PieceContent dangerouslySetInnerHTML={{ __html: props.pieceContent }}/>
  </PieceWrapper>
)

export default Piece