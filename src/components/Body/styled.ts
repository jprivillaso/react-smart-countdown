import styled from 'styled-components';
import media from "styled-media-query";
import { FiPauseCircle, FiPlayCircle } from 'react-icons/fi';

import {
  errorColor,
  activeIcon
} from '../../commons/colors';

export const Body = styled.main`
  grid-area: body;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InfoText = styled.p`
  color: ${errorColor};
`;

export const Time = styled.p`
  font-size: 10em;
  margin: 0;
  margin-right: 0.2em;

  &.warning {
    color: ${errorColor};
  }

  &.blink {
    animation: ${
      (props: any) => props.blink
        ? `blinker ${props.blink}s linear infinite`
        : 'blinker 1s linear infinite'
    };
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  ${media.lessThan("medium")`
    font-size: 7em;
  `}

  ${media.lessThan("small")`
    font-size: 5em;
  `}
`;

export const PauseIcon = styled(FiPauseCircle)`
  font-size: 5em;
  cursor: pointer;

  &:hover {
    color: ${activeIcon};
  }

  ${media.lessThan("medium")`
    font-size: 5em;
  `}

  ${media.lessThan("small")`
    font-size: 2em;
  `}
`;

export const StartIcon = styled(FiPlayCircle)`
  font-size: 5em;
  cursor: pointer;

  &:hover {
    color: ${activeIcon};
  }

  ${media.lessThan("medium")`
    font-size: 5em;
  `}

  ${media.lessThan("small")`
    font-size: 2em;
  `}
`;
