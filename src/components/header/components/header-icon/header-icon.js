import React from "react"
import * as S from "./header-icon.style"
import { navigate } from "gatsby"

const HeaderIcon = () => {
  return (
    <S.Icon to="/">
      <S.Dimension>Dimensão</S.Dimension>
      <S.Seven>sete</S.Seven>
      <S.Dot>.</S.Dot>
    </S.Icon>
  )
}

export default HeaderIcon
