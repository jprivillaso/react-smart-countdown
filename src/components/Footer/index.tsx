import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';

import * as S from './styled';

import { Horizontal } from '../../commons/styled';
import { Status } from '../../commons/types';
import { COUNTER_SPEED_SLOW, COUNTER_SPEED_MEDIUM, COUNTER_SPEED_FAST } from '../../commons/constants';

import CountdownContext from '../../state/context';
import SpeedControl from '../SpeedControl';

function Footer() {
  const { setCurrentSpeed, countdownStatus } = useContext(CountdownContext);
  const [active, setActive] = useState(COUNTER_SPEED_SLOW);

  const updateSpeedControl = (speed: number) => {
    if ([Status.Started, Status.HalfPassed].includes(countdownStatus)) {
      setCurrentSpeed(speed);
      setActive(speed);
    } else {
      Swal.fire('Error', 'Countdown must be in progress in order to be able to change the speed', 'error');
    }
  };

  return (
    <S.Footer>
      <Horizontal>
        <SpeedControl
          active={active}
          speed={COUNTER_SPEED_SLOW}
          onClick={(currentSpeed: number) => updateSpeedControl(currentSpeed)}
        />
        <SpeedControl
          active={active}
          speed={COUNTER_SPEED_MEDIUM}
          onClick={(currentSpeed: number) => updateSpeedControl(currentSpeed)}
        />
        <SpeedControl
          active={active}
          speed={COUNTER_SPEED_FAST}
          onClick={(currentSpeed: number) => updateSpeedControl(currentSpeed)}
        />
      </Horizontal>
    </S.Footer>
  );
}

export default Footer;
