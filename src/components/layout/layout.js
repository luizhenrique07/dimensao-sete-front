import React from "react"

import Header from "../header/header"
import { ThemeProvider } from "@material-ui/core/styles"
import { Normalize } from "./normalize.style"
import { GlobalStyle } from "./global-style"
import theme from "../../shared/theme/theme"
import { ThemeProvider as SCThemeProvider } from "styled-components"
import * as S from "./layout.style"
import Footer from "../footer/footer"

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <SCThemeProvider theme={theme}>
        <Header title="Blog" location={location} />
        <Normalize />
        <GlobalStyle />
        <S.StyledContainer maxWidth="lg">
          <S.Main>{children}</S.Main>
        </S.StyledContainer>
        <Footer></Footer>
      </SCThemeProvider>
    </ThemeProvider>
  )
}

export default Layout
