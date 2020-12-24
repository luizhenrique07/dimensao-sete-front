import React from "react"
import Container from "@material-ui/core/Container"
import Header from "../header/header"
import { ThemeProvider } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core/styles"

import "./layout.module.scss"

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#fbbf17",
    },
    primary: {
      main: "#212121",
    },
  },
})

const Layout = ({ children }) => {
  const sections = [
    { title: "Technology", url: "#" },
    { title: "Design", url: "#" },
    { title: "Culture", url: "#" },
    { title: "Business", url: "#" },
    { title: "Politics", url: "#" },
    { title: "Opinion", url: "#" },
    { title: "Science", url: "#" },
    { title: "Health", url: "#" },
    { title: "Style", url: "#" },
    { title: "Travel", url: "#" },
  ]

  return (
    <ThemeProvider theme={theme}>
      <Header title="Blog" sections={sections} />
      <Container maxWidth="md">
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
