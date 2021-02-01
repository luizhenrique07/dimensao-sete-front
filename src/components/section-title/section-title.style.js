import styled from "styled-components"
import { colors } from "../../shared/theme/theme"

export const Title = styled.h2`
  font-family: Oswald;
  font-weight: 800;
  margin-bottom: 10px;
  color: ${colors.black};
  line-height: 1.3;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: ${props => props.theme.palette.secondary.main};
  font-size: 2rem;
`

export const FeaturedTitleLargeScreen = styled(Title)`
  display: none;
  ${props => props.theme.breakpoints.up("sm")} {
    display: block;
    font-family: Oswald;
    font-weight: 800;
    margin-bottom: 10px;
    color: ${colors.black};
    line-height: 1.3;
    margin-top: 0;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.palette.secondary.main};
    font-size: 2rem;
  }
`
