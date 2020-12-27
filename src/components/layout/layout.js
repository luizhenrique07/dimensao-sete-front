import React from "react"
import Container from "@material-ui/core/Container"
import Header from "../header/header"
import { ThemeProvider } from "@material-ui/core/styles"
import { Normalize } from "./normalize.style"
import { StylesProvider } from "@material-ui/styles"
import theme from "../../shared/theme/theme"
import { ThemeProvider as SCThemeProvider } from "styled-components"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <Header title="Blog" />
        <Normalize />
        <Container maxWidth="md">
          <main>{children}</main>
        </Container>
      </SCThemeProvider>
    </ThemeProvider>
  )
}

export default Layout
