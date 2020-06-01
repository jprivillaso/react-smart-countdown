import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'

import * as S from './styled';
import { handleInterval } from './interval';

import UserContext from '../../state/context';
import { isInputValid } from '../../commons/validateUserInput';

function Header() {
  // shared state
  const { countdownValue, setCurrentValue } = useContext(UserContext);

  // local state
  const [ started, setStarted ] = useState(false);
  const [ time, setTime ] = useState('');

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(
      () => handleInterval(countdownValue, setCurrentValue),
      1000
    );

    return () => clearInterval(interval);
  }, [ countdownValue, setCurrentValue, started ]);

  const startCountdown = () => {
    if (isInputValid(time)) {
      setCurrentValue(time);
      setStarted(true);
    } else {
      Swal.fire(
        'Error',
        'Please insert the value with the proper format MM:SS',
        'error'
      );
    }
  }

  return (
    <S.Header>
      <S.Vertical>
        <S.Text>Smart Countdown</S.Text>
        <div>
          <S.Input
            placeholder="02:30"
            value={ time || '' }
            onChange={
              (e: React.SyntheticEvent<HTMLInputElement>) => setTime(`${ e.currentTarget.value }`)
            }
          ></S.Input>
          <S.Button
            onClick={() => startCountdown()}
          >Start</S.Button>
        </div>
      </S.Vertical>
    </S.Header>
  );
}

export default Header;