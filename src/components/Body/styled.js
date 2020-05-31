import styled from 'styled-components';
import { FiPauseCircle } from 'react-icons/fi';

import {
  errorColor
} from '../../commons/colors';

export const Body = styled.main`
  grid-area: body;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled.p`
  color: ${errorColor}
`;

export const Time = styled.p`
  font-size: 10em;
  margin: 0;
  margin-right: 0.2em;
`;

export const PauseIcon = styled(FiPauseCircle)`
  font-size: 5em;
`;
