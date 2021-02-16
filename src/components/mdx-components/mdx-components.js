import React from "react"
import * as S from "./mdx-components.style"

const CustomHeading = props => <S.Title {...props} />

const CustomParagraph = props => <S.Paragraph {...props} />

const MDXComponents = {
  h1: CustomHeading,
  p: CustomParagraph,
}

export default MDXComponents
