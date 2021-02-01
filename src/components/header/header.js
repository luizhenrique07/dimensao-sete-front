import React, { useState } from "react"
import PropTypes from "prop-types"
import Tabs from "@material-ui/core/Tabs"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import SiteLogo from "../header-icon/header-icon"
import * as S from "./header.style"

import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import { navigate } from "gatsby"

export default function Header({ location }) {
  const [menuDrawer, setMenuDrawer] = useState(false)

  const sections = [
    { label: "Página Inicial", path: "/" },
    { label: "Notícias", path: "/noticias/" },
    { label: "Reviews", path: "/reviews/" },
    { label: "Listas", path: "/listas/" },
  ]

  function mobileMenuOpen() {
    setMenuDrawer(true)
  }

  function mobileMenuClose() {
    setMenuDrawer(false)
  }

  function navigateAndCloseDrawer(path) {
    navigate(path)
    mobileMenuClose()
  }

  function getCurrentPath() {
    // let currentPath = location.pathname
    // if (currentPath.substr(-1) == "/" && currentPath.length > 1) {
    //   currentPath = currentPath.substr(0, currentPath.length - 1)
    // }

    let path = sections.find(x => x.path.includes(location.pathname))

    // console.log(path, currentPath)

    return path
  }

  return (
    <S.StyledAppBar>
      <Toolbar>
        <Container maxWidth="lg">
          <S.FlexGrid item xs={12}>
            <SiteLogo />

            <S.H1>Dimensão Sete</S.H1>
            <S.IconContainer>
              <IconButton
                onClick={mobileMenuOpen}
                color="inherit"
                aria-label="Menu"
              >
                <S.StyledMenuIcon />
              </IconButton>
            </S.IconContainer>
            <S.TabContainer>
              <SwipeableDrawer
                anchor="right"
                open={menuDrawer}
                onClose={mobileMenuClose}
                onOpen={mobileMenuOpen}
              >
                <AppBar title="Menu" />
                <List>
                  {sections.map(item => (
                    <ListItem
                      key={item.label}
                      label={item.label}
                      href={item.path}
                      button
                      onClick={() => navigateAndCloseDrawer(item.path)}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </SwipeableDrawer>
              <Tabs
                indicatorColor="secondary"
                textColor="secondary"
                value={location.pathname}
              >
                {sections.map(item => (
                  <S.TabItem
                    key={item.label}
                    label={item.label}
                    value={item.path}
                    onClick={() => navigateAndCloseDrawer(item.path)}
                  />
                ))}
              </Tabs>
            </S.TabContainer>
          </S.FlexGrid>
        </Container>
      </Toolbar>
    </S.StyledAppBar>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}
