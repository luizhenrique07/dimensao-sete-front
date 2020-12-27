import styled from "styled-components"
import theme from "../../../../shared/theme/theme"

export const Image = styled.img`
  height: 40px;
`
export const Title = styled.b`
  font-size: 30px;
  padding-right: 5px;
  font-weight: 700;
  font-family: "Nunito", sans-serif;
`

console.log(theme.palette)

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.palette.secondary.main};
`
