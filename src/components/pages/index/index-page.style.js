import styled from "styled-components"

export const Home = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, auto);
  margin: 0 auto;
`

export const HomeCard = styled.section`
  ${props => props.theme.breakpoints.up("md")} {
    margin: 0;
  }

  margin-left: -20px;
  margin-right: -20px;
`

export const HomePrimary = styled(HomeCard)`
  grid-row: 1;
  grid-column: 1 / span 12;
`
export const HomeSecondary = styled(HomeCard)`
  grid-row: 2;
  grid-column: 1 / span 12;

  ${props => props.theme.breakpoints.up("md")} {
    padding-top: 1rem;
  }
`
export const HomeLatest = styled.section`
  grid-row: 3;
  grid-column: 1 / span 12;

  display: grid;
  grid-template-columns: 1fr;

  ${props => props.theme.breakpoints.up("md")} {
    /* grid-template-columns: 3fr 1fr; */
  }

  ${props => props.theme.breakpoints.up("md")} {
    padding-top: 1rem;
  }
`

export const LatestPosts = styled.div``
export const TrendingPosts = styled.div`
  display: none;
  ${props => props.theme.breakpoints.up("md")} {
    display: block;
  }
`

export const HomeSecondaryGrid = styled.div`
  ${props => props.theme.breakpoints.up("md")} {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
`
