import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { colors } from "../../../shared/theme/theme"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 6em;
  align-items: center;
  justify-content: center;
  color: ${colors.lightGray};
`

export const Error = styled.h2``

export const ErrorDesc = styled.span`
  font-family: Oswald;
  padding-bottom: 40px;
  text-align: center;
`

export const HomeButton = styled(Button)``
