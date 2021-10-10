import Text from '../Text';
import { SPEED_SLOW, SPEED_MEDIUM, SPEED_FAST, ACTIVE_SPEED_CLASS } from '../../commons/constants';
import * as S from './styled';

const getTextBySpeed = (speed: number): string => {
  switch (speed) {
    case SPEED_MEDIUM:
      return '1.5X';
    case SPEED_FAST:
      return '2X';
    case SPEED_SLOW:
    default:
      return '1X';
  }
};

type SpeedControlProps = {
  speed: number;
  onClick: (currSpeed: number) => void;
  active: number;
};

const SpeedControl: React.FC<SpeedControlProps> = ({ speed, onClick, active }) => (
  <S.SpeedControl
    className={active === speed ? ACTIVE_SPEED_CLASS : ''}
    onClick={() => onClick(speed)}
  >
    <Text> {getTextBySpeed(speed)} </Text>
  </S.SpeedControl>
);

export default SpeedControl;
