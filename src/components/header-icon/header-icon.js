import React from "react"
import * as S from "./header-icon.style"

const SiteLogo = ({ isWhite }) => {
  return (
    <S.Icon to="/">
      {!isWhite && (
        <>
          <S.Dimension>Dimensão</S.Dimension>
          <S.Seven>sete</S.Seven>
          <S.Dot>.</S.Dot>
        </>
      )}
      {isWhite && (
        <>
          <S.Title>Dimensão</S.Title>
          <S.Title>sete</S.Title>
          <S.WhiteDot>.</S.WhiteDot>
        </>
      )}
    </S.Icon>
  )
}

export default SiteLogo
