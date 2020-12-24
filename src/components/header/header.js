import React from "react"
import PropTypes from "prop-types"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import "./header.module.scss"

export default function Header(props) {
  const { sections, title } = props

  return (
    <div className="header">
      <AppBar position="static">
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="h6" className="title">
              Dimensão Sete
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}
