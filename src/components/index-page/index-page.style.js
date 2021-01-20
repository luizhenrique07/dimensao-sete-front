import styled from "styled-components"
import { colors } from "../../shared/theme/theme"

export const Home = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, auto);
  margin: 0 auto;
`

export const FeaturedTitle = styled.h2`
  display: none;
  ${props => props.theme.breakpoints.up("sm")} {
    display: block;
    font-family: Nunito;
    font-weight: 800;
    margin-bottom: 10px;
    color: ${colors.black};
    line-height: 1.3;
    margin-top: 0;
    text-transform: uppercase;
  }
`

export const HomePrimary = styled.section`
  grid-row: 1;
  grid-column: 1 / span 12;
`
export const HomeSecondary = styled.section`
  grid-row: 2;
  grid-column: 1 / span 12;

  ${props => props.theme.breakpoints.up("sm")} {
    padding-top: 1rem;
  }
`

export const HomeSecondaryGrid = styled.div`
  ${props => props.theme.breakpoints.up("sm")} {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
`
