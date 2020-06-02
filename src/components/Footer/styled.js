import styled from 'styled-components';
import media from 'styled-media-query';

import {
  mainColor,
  mainBorderColor,
  mainFontColor,
  highlightText
} from '../../commons/colors';

export const Footer = styled.footer`
  grid-area: footer;
`;

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

  ${media.lessThan("small")`
    width: 5em;
    margin: 0 0.5em;
  `}
`;

export const Text = styled.p`
  font-size: 1em;
  color: ${mainFontColor};
`;
