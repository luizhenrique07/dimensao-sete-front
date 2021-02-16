import styled from "styled-components"
import Container from "@material-ui/core/Container"

export const StyledContainer = styled(Container)`
  ${props => props.theme.breakpoints.up("md")} {
    padding: 64px 24px 24px;
  }
  padding: 56px 20px 20px;

  background-color: #ffffff;
`

export const Main = styled.main`
  ${props => props.theme.breakpoints.up("md")} {
    padding-top: 20px;
  }

  background-color: #ffffff;
`
