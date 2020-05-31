import styled from 'styled-components';

import {
  mainColor
} from '../../commons/colors';

export const Footer = styled.footer`
  grid-area: footer;
`;

export const SpeedControl = styled.div`
  width: 100px;
  height: 50px;
  border: solid 1px #888888;
  font-size: 1em;
  margin: 0 1em;
  cursor: pointer;

  &.active {
    background: ${mainColor};
    border: none;
    color: black;
  }

  &:hover {
    background: ${mainColor};
  }
`;

export const Text = styled.p`
  font-size: 1em;
`;
