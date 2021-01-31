import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../../shared/theme/theme"

export const Image = styled.img`
  height: 40px;
`
export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  font-family: "Righteous", sans-serif;
  padding: 0;
  color: #fff;
`

export const Dimension = styled(Title)`
  color: ${theme.palette.secondary.main};
`

export const Seven = styled(Title)``

export const Dot = styled(Title)`
  font-size: 45px;
  color: #37bdf5;
  margin-top: -7%;
  margin-left: 1px;
`

export const WhiteDot = styled(Dot)`
  color: #fff;
`

export const Icon = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`
