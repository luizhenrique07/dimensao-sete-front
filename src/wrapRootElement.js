import React from "react"




export const wrapRootElement = ({ element }) => {
  console.info(`theme`, theme)
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
