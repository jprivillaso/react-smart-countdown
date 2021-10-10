import styled from 'styled-components';
import media from 'styled-media-query';

import Text from '../Text';
import { errorColor } from '../../commons/colors';

type TimeProps = {
  blink?: number;
};

const Time = styled(Text)`
  font-size: 10em;
  margin: 0;
  margin-right: 0.2em;

  &.warning {
    color: ${errorColor};
  }

  &.blink {
    animation: ${(props: TimeProps) =>
      props.blink ? `blinker ${props.blink}s linear infinite` : 'blinker 1s linear infinite'};
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  ${media.lessThan('medium')`
    font-size: 7em;
  `}

  ${media.lessThan('small')`
    font-size: 5em;
  `}
`;

export default Time;
