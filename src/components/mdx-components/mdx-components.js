import React from "react"
import * as S from "./mdx-components.style"

const CustomHeading = props => <S.Title {...props} />

const CustomImage = props => <S.Image {...props} />

const CustomParagraph = props => <S.Paragraph {...props} />

const MDXComponents = {
  h1: CustomHeading,
  img: CustomImage,
  p: CustomParagraph,
}

export default MDXComponents
