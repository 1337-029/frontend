import styled from "styled-components"
import {color} from "../../styles/globals";

const Command = styled.span`
  color: ${color.primary};
  &:before {
    content: "${props => props.username}" "$ ";
  }
`

export default Command;
