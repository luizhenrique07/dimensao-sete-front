import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { colors } from "../../shared/theme/theme"

export const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${props => props.theme.breakpoints.up("md")} {
    grid-template-columns: 1fr 3fr;
  }
  ${props => props.theme.breakpoints.up("sm")} {
    grid-template-columns: 1fr 2fr;
  }
`

export const ArticleLink = styled(Link)`
  right: 0;
  margin-top: 0;
  z-index: 1;
  color: black;
  font-size: 24px;
  width: 100%;
`

export const Image = styled(Img)`
  max-width: 500px;
`

export const ArticleInfo = styled.div`
  color: black;
  margin-left: 1.5rem;
`

export const ArticleTitle = styled.h3`
  font-weight: 800;
  font-size: 1.8em;
  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 2.2em;
  }
  text-transform: capitalize;
  margin: 0;
  color: ${colors.black};
  &:hover {
    text-decoration: underline;
  }
`
export const ArticleTitleLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
`
