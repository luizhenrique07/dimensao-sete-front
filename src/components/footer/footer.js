import React from "react"
import SiteLogo from "../header-icon/header-icon"
import * as S from "./footer.style"

const Footer = () => {
  return (
    <S.Footer>
      <SiteLogo isWhite={true}></SiteLogo>
      <S.CopyRight>Copyright © 2021 www.dimensaosete.com.br</S.CopyRight>
    </S.Footer>
  )
}

export default Footer
