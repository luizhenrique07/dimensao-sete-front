import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { colors } from "../../../shared/theme/theme"

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  background-color: black;
  font-family: Nunito;
`

export const Image = styled(Img)`
  -webkit-mask-image: linear-gradient(to top, transparent, black 50%);
  max-height: 500px;
`

export const ArticleInfo = styled.div`
  color: white;
  margin-left: 1rem;
`

export const ArticleLink = styled(Link)`
  right: 0;
  margin-top: 0;
  z-index: 1;
  color: white;
  font-size: 24px;
  width: 100%;
`
export const ArticleTitle = styled.h3`
  font-weight: 800;
  font-size: 2.2em;
  text-transform: capitalize;
  margin: 0;
  color: ${colors.white};
  &:hover {
    text-decoration: underline;
  }
`

export const ArticleTitleLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
`
