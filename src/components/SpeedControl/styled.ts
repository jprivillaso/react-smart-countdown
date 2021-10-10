import styled from 'styled-components';
import media from 'styled-media-query';

import { mainColor, mainBorderColor, highlightText } from '../../commons/colors';

export const SpeedControl = styled.div`
  width: 5em;
  height: 50px;
  border: solid 1px ${mainBorderColor};
  font-size: 1em;
  margin: 0 1em;
  cursor: pointer;
  box-sizing: border-box;

  &.active {
    background: ${mainColor};
    border: none;

    p {
      color: ${highlightText};
    }
  }

  &:hover {
    background: ${mainColor};

    &:not(.active) {
      border: solid 1px transparent;
    }

    p {
      color: ${highlightText};
    }
  }

  ${media.lessThan('small')`
    width: 5em;
    margin: 0 0.5em;
  `}
`;
