import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';

import * as S from './styled';

import {
  Horizontal
} from '../../commons/styled';
import { Status } from '../../commons/types';
import {
  COUNTER_SPEED_SLOW,
  COUNTER_SPEED_MEDIUM,
  COUNTER_SPEED_FAST,
  ACTIVE_SPEED_CLASS
} from '../../commons/constants';

import CountdownContext from '../../state/context';

function Footer() {
  const { setCurrentSpeed, countdownStatus } = useContext(CountdownContext);
  const [ active, setActive ] = useState(COUNTER_SPEED_SLOW);

  const updateSpeedControl = (speed: number) => {
    if (countdownStatus === Status.Started || countdownStatus === Status.HalfPassed) {
      setCurrentSpeed(speed);
      setActive(speed);
    } else {
      Swal.fire(
        'Error',
        'Countdown must be in progress in order to be able to change the speed',
        'error'
      );
    }
  };

  console.log(active);

  return (
    <S.Footer>
      <Horizontal>
        <S.SpeedControl
          className={active === COUNTER_SPEED_SLOW ? ACTIVE_SPEED_CLASS : ''}
          onClick={() => updateSpeedControl(COUNTER_SPEED_SLOW)}
        >
          <S.Text> 1X </S.Text>
        </S.SpeedControl>
        <S.SpeedControl
          className={active === COUNTER_SPEED_MEDIUM ? ACTIVE_SPEED_CLASS : ''}
          onClick={() => updateSpeedControl(COUNTER_SPEED_MEDIUM)}
        >
          <S.Text>1.5X</S.Text>
        </S.SpeedControl>
        <S.SpeedControl
          className={active === COUNTER_SPEED_FAST ? ACTIVE_SPEED_CLASS : ''}
          onClick={() => updateSpeedControl(COUNTER_SPEED_FAST)}
        >
          <S.Text>2X</S.Text>
        </S.SpeedControl>
      </Horizontal>
    </S.Footer>
  );
}

export default Footer;