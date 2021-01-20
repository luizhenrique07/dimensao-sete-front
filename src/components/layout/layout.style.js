import styled from "styled-components"
import Container from "@material-ui/core/Container"

export const StyledContainer = styled(Container)`
  padding-top: 56px;
  ${props => props.theme.breakpoints.up("sm")} {
    padding: 64px 24px 24px;
  }
  padding-left: 0px;
  padding-right: 0px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
`

export const Main = styled.main`
  ${props => props.theme.breakpoints.up("sm")} {
    padding-top: 20px;
  }

  background-color: #ffffff;
`
