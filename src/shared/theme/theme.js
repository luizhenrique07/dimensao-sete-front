import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#ffc000",
      600: "#E89B0C",
      // main: "#fbbf17",
    },
    dark: {
      main: "#E89B0C",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 712,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})

export const colors = {
  black: "#1f1f1f",
  white: "#fff",
}

export default theme
