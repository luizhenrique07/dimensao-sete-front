import styled from "styled-components"
import { Link } from "gatsby"
import theme from "../../shared/theme/theme"
import MenuIcon from "@material-ui/icons/Menu"
import AppBar from "@material-ui/core/AppBar"
import Tab from "@material-ui/core/Tab"

export const StyledLink = styled(Link)`
  color: ${theme.palette.primary.contrastText};
`
export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
`

export const FlexGrid = styled.div`
  display: flex;
  align-items: center;
`

export const StyledMenuIcon = styled(MenuIcon)`
  font-size: 2rem;
`

export const IconContainer = styled.div`
  float: right;
  width: 100%;
  display: none;
  font-size: 2rem;

  ${props => props.theme.breakpoints.down("sm")} {
    display: flex;
    justify-content: flex-end;
  }
`

export const TabContainer = styled.div`
  margin-left: 32;
  float: right;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  ${props => props.theme.breakpoints.down("sm")} {
    display: none;
  }
`
export const TabItem = styled(Tab)`
  color: ${theme.palette.primary.contrastText};
  min-width: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
`
