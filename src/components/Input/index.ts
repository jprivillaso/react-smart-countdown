import styled from 'styled-components';
import media from 'styled-media-query';

import { mainColor } from '../../commons/colors';

const Input = styled.input`
  height: 50px;
  width: 8em;
  margin: 0 1em;
  box-sizing: border-box;
  background: white;
  border: solid 1px #888888;
  padding: 0 1em;
  font-size: 1em;

  &:focus {
    border: solid 1px ${mainColor};
  }

  ${media.lessThan('small')`
    width: 5em;
  `}
`;

export default Input;
