import styled from "styled-components"
import Img from "gatsby-image"
import { colors } from "../shared/theme/theme"

export const Article = styled.article`
  font-size: 20px;
`

export const BlogPost = styled.div``

export const Title = styled.h2`
  font-family: Oswald;
  font-weight: 800;

  font-size: 2.2em;
  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 3em;
  }
`

export const Subtitle = styled.p`
  font-family: Oswald;
  margin: 0;
  margin-bottom: 5px;
  font-size: 1.2em;
  ${props => props.theme.breakpoints.up("sm")} {
    font-size: 1.5em;
  }
`

export const Time = styled.time`
  color: ${colors.lightGray};
  font-size: 16px;
`

export const Image = styled(Img)`
  margin-top: 10px;
`

export const ShareButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ArticleInfo = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`
