import styled from "styled-components"

export const Article = styled.article`
  font-size: 20px;
`

export const BlogPost = styled.div`
  padding: 20px;

  ${props => props.theme.breakpoints.up("sm")} {
    padding: 0;
  }
`

export const Title = styled.h2`
  font-family: Oswald;
  font-weight: 800;
`

