import React, { useContext, useState } from 'react';

import * as S from './styled';
import {
  Horizontal
} from '../../commons/styled';
import CountdownContext, { Status } from '../../state/context';
import Swal from 'sweetalert2';

function Footer() {
  const { setCurrentSpeed, countdownStatus } = useContext(CountdownContext);
  const [ active, setActive ] = useState('1000');

  const updateSpeedControl = (speed: number) => {
    if (countdownStatus === Status.Started || countdownStatus === Status.HalfPassed) {
      setCurrentSpeed(speed);
      setActive(`${speed}`);
    } else {
      Swal.fire(
        'Error',
        'Countdown must be in progress in order to be able to change the speed',
        'error'
      );
    }
  };

  return (
    <S.Footer>
      <Horizontal>
        <S.SpeedControl
          className={active === '1000' ? 'active' : ''}
          onClick={() => updateSpeedControl(1000)}
        >
          <S.Text> 1X </S.Text>
        </S.SpeedControl>
        <S.SpeedControl
          className={active === '600' ? 'active' : ''}
          onClick={() => updateSpeedControl(600)}
        >
          <S.Text>1.5X</S.Text>
        </S.SpeedControl>
        <S.SpeedControl
          className={active === '400' ? 'active' : ''}
          onClick={() => updateSpeedControl(400)}
        >
          <S.Text>2X</S.Text>
        </S.SpeedControl>
      </Horizontal>
    </S.Footer>
  );
}

export default Footer;