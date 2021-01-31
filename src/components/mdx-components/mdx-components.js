import React from "react"
import * as S from "./mdx-components.style"

const CustomHeading = props => <S.Title {...props} />

const MDXComponents = {
  h1: CustomHeading,
}

export default MDXComponents
