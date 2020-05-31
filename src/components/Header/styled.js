import styled from 'styled-components';

import {
  mainColor, secondaryColor
} from '../../commons/colors';

export const Header = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Vertical = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  font-size: 2em;
`;

export const Input = styled.input`
  height: 50px;
  width: 150px;
  margin: 1em;
  box-sizing: border-box;
  background: white;
  border: solid 1px #888888;
  padding: 0 1em;
  font-size: 1em;

  &:focus {
    border: solid 1px ${mainColor};
  }
`;

export const Button = styled.button`
  margin: 1em;
  height: 50px;
  width: 150px;
  box-sizing: border-box;
  background: ${mainColor};
  border: none;
  font-size: 1em;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
