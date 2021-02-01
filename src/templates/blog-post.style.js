import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { colors } from "../shared/theme/theme";

export const Article = styled.article`
  padding: 20px;
  font-size: 20px;

  ${props => props.theme.breakpoints.up("sm")} {
    padding: 0;
  }
`

export const Title = styled
