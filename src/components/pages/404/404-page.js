import React from "react"
import * as S from "./404-page.style"
import { navigate } from "gatsby"

const NotFoundPage = () => {
  return (
    <S.Section>
      <S.Error>404</S.Error>
      <S.ErrorDesc>Página não encontrada</S.ErrorDesc>
      <S.HomeButton
        variant="outlined"
        color="primary"
        onClick={() => navigate("/")}
      >
        ← Página Inicial
      </S.HomeButton>
    </S.Section>
  )
}

export default NotFoundPage
