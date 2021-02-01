import styled from "styled-components"

export const Article = styled.article`
  padding: 20px;
  font-size: 20px;
  ${props => props.theme.breakpoints.up("sm")} {
    padding: 0;
  }
  font-family: Nunito;
`

export const Title = styled
