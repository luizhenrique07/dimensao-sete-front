import React from "react"
import logo from "../../../../../static/logo.png"
import * as S from "./header-icon.style"

const HeaderIcon = () => {
  return (
    <S.Icon className="logo">
      <S.Title>dimensão</S.Title>
      <S.Image src={logo} alt="7" />
    </S.Icon>
  )
}

export default HeaderIcon
