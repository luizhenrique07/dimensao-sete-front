import styled from "styled-components"
import { Link } from "gatsby"
import theme from "../../shared/theme/theme"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import AppBar from "@material-ui/core/AppBar"
import Tab from "@material-ui/core/Tab"

export const StyledLink = styled(Link)`
  color: ${theme.palette.primary.contrastText};
`
export const StyledAppBar = styled(AppBar)`
  /* position: relative; */
  box-shadow: none;
`

export const StyledToolbar = styled(Toolbar)`
  /* display: flex;
  justify-content: "space-between"; */
`

export const FlexGrid = styled.div`
  display: flex;

  align-items: center;
`

export const StyledIconButton = styled(IconButton)``

export const IconContainer = styled.div`
  float: right;
  width: 100%;
  display: none;

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
`
