import React from "react"
import PropTypes from "prop-types"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import "./header.scoped.scss"

export default function Header(props) {
  const { sections, title } = props

  return (
    <>
      <Toolbar>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
        >
          {title}
        </Typography>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense">
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  )
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}
