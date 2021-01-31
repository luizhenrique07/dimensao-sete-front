import styled from "styled-components"

export const Article = styled.article`
  padding: 20px;
  font-size: 20px;
  ${props => props.theme.breakpoints.up("sm")} {
    padding: 0;
  }
`
export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: yellowgreen !important;
`

export const Paragraph = styled.p`
  font-size: 1em;
  color: #222;
`
