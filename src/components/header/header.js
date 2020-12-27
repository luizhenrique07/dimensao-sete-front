import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Toolbar from "@material-ui/core/Toolbar"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import HeaderIcon from "./components/header-icon/header-icon"
import * as S from "./header.style"
import Grid from "@material-ui/core/Grid"
import MenuIcon from "@material-ui/icons/Menu"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

export default function Header() {
  const [menuDrawer, setMenuDrawer] = useState(false)
  const [value, setValue] = useState(0)

  const sections = [
    { label: "Página Inicial", path: "/home" },
    { label: "Noticias", path: "/noticias" },
    { label: "Reviews", path: "/reviews" },
    { label: "Listas", path: "/listas" },
  ]

  function mobileMenuOpen() {
    setMenuDrawer(true)
  }

  function mobileMenuClose() {
    setMenuDrawer(false)
  }

  return (
    <S.StyledAppBar>
      <S.StyledToolbar>
        <Container maxWidth="md">
          <S.FlexGrid item xs={12}>
            <HeaderIcon />

            <S.IconContainer>
              <S.StyledIconButton
                onClick={mobileMenuOpen}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </S.StyledIconButton>
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
                      href={item.path}
                      label={item.label}
                      button
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </SwipeableDrawer>
              <Tabs
                indicatorColor="primary"
                textColor="primary"
                onChange={setValue}
              >
                {sections.map((item, index) => (
                  <S.TabItem key={item.label} label={item.label} />
                ))}
              </Tabs>
            </S.TabContainer>
          </S.FlexGrid>
        </Container>
      </S.StyledToolbar>
    </S.StyledAppBar>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}
