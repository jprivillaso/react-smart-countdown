import Text from '../Text';

import {
  COUNTER_SPEED_SLOW,
  COUNTER_SPEED_MEDIUM,
  COUNTER_SPEED_FAST,
  ACTIVE_SPEED_CLASS,
} from '../../commons/constants';

import * as S from './styled';

const getTextBySpeed = (speed: number): string => {
  switch (speed) {
    case COUNTER_SPEED_MEDIUM:
      return '1.5X';
    case COUNTER_SPEED_FAST:
      return '2X';
    case COUNTER_SPEED_SLOW:
    default:
      return '1X';
  }
};

type SpeedControlProps = {
  speed: number;
  onClick: Function;
  active: number;
};

const SpeedControl: React.FC<SpeedControlProps> = ({ speed, onClick, active }) => {
  return (
    <S.SpeedControl className={active === speed ? ACTIVE_SPEED_CLASS : ''} onClick={() => onClick(speed)}>
      <Text> {getTextBySpeed(speed)} </Text>
    </S.SpeedControl>
  );
};

export default SpeedControl;
