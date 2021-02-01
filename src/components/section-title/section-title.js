import React from "react"
import * as S from "./section-title.style"

export const SectionTitle = ({ children }) => <S.Title>{children}</S.Title>

export const SectionTitleLargeScreen = ({ children }) => (
  <S.FeaturedTitleLargeScreen>{children}</S.FeaturedTitleLargeScreen>
)
