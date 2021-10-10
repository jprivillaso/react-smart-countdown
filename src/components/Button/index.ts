import styled from 'styled-components';
import media from 'styled-media-query';

import { mainColor, highlightText } from '../../commons/colors';

const Button = styled.button`
  margin: 0 1em;
  height: 50px;
  width: 8em;
  box-sizing: border-box;
  background: ${mainColor};
  border: none;
  font-size: 1em;
  color: ${highlightText};

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  ${media.lessThan('small')`
    width: 5em;
  `}
`;

export default Button;
