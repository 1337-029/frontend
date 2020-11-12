import React, {Component} from 'react';
import {color} from "../../styles/globals";
import styled, {keyframes} from "styled-components";

const pulse = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Cursor = styled.span`
  animation: ${pulse} 400ms infinite alternate;
  color: ${color.primary};
  display: inline;
  &:before {
    content: "█";
  }
`

export default Cursor;