import React from "react"
import Container from "@material-ui/core/Container"
import Header from "../header/header"

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
    <>
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
