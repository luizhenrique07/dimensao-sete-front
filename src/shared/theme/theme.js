import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#ffc000",

      // main: "#fbbf17",
    },
  },
})

export const colors = {
  black: "#1f1f1f",
  white: "#fff",
}

export default theme
