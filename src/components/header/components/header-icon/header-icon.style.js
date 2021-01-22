import { Link } from "gatsby"
import styled from "styled-components"
import theme from "../../../../shared/theme/theme"

export const Image = styled.img`
  height: 40px;
`
export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  font-family: "Righteous", sans-serif;
  padding: 0;
  color: ${theme.palette.secondary.main};
`

export const Dimension = styled(Title)``
export const Seven = styled(Title)``

export const Dot = styled.div`
  font-size: 80px;
  height: 10px;
  color: #37bdf5;
  margin-top: -54%;
  margin-left: -2px;
`

export const Icon = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`
