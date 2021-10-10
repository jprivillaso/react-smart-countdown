import styled from 'styled-components';
import media from 'styled-media-query';
import { FiPauseCircle, FiPlayCircle } from 'react-icons/fi';

import { activeIconColor } from '../../commons/colors';

export const StartIcon = styled(FiPlayCircle)`
  font-size: 5em;
  cursor: pointer;

  &:hover {
    color: ${activeIconColor};
  }

  ${media.lessThan('medium')`
    font-size: 5em;
  `}

  ${media.lessThan('small')`
    font-size: 2em;
  `}
`;

export const PauseIcon = styled(FiPauseCircle)`
  font-size: 5em;
  cursor: pointer;

  &:hover {
    color: ${activeIconColor};
  }

  ${media.lessThan('medium')`
    font-size: 5em;
  `}

  ${media.lessThan('small')`
    font-size: 2em;
  `}
`;
