import React from "react"
import * as S from "./header-icon.style"

const SiteLogo = ({ isWhite }) => {
  return (
    <>
      {!isWhite && (
        <S.IconLink to="/">
          <S.Dimension>Dimensão</S.Dimension>
          <S.Seven>Sete</S.Seven>
          <S.Dot>.</S.Dot>
        </S.IconLink>
      )}
      {isWhite && (
        <S.Icon>
          <S.Title>Dimensão</S.Title>
          <S.Title>sete</S.Title>
          <S.WhiteDot>.</S.WhiteDot>
        </S.Icon>
      )}
    </>
  )
}

export default SiteLogo
