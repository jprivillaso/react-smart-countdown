import styled from 'styled-components';
import media from 'styled-media-query';

import Text from '../Text';
import { TimeProps } from './Time.types';
import { errorColor, mainFontColor } from '../../commons/colors';

const Time = styled(Text)`
  font-size: 10em;
  margin: 0;
  margin-right: 0.2em;

  color: ${(props: TimeProps) => (props.warning ? errorColor : mainFontColor)};
  animation: ${(props: TimeProps) =>
    props.blink ? `blinker ${props.blinkSpeed}s linear infinite` : 'none'};

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
