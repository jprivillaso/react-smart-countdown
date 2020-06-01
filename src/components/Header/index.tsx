import React, { useContext } from 'react';
import Swal from 'sweetalert2'

import * as S from './styled';
import UserContext, { CountdownStatusContext, CountdownValueContext } from '../../state/context';

const MM_SS_REGEX = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d))$/;

function Header() {
  const { setCurrentStatus } = useContext(UserContext) as CountdownStatusContext;
  const {
    countdownValue,
    setCurrentValue
  } = useContext(UserContext) as CountdownValueContext;

  const updateTime = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const value: string = event.currentTarget.value;
    setCurrentValue(value);
  }

  const isInputValid = (currentValue: string): boolean =>
    MM_SS_REGEX.test(currentValue) || true

  const startCountdown = () => {
    if (isInputValid(countdownValue)) {
      setCurrentStatus(true);
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
            value={countdownValue || ''}
            onChange={
              (e: React.SyntheticEvent<HTMLInputElement>) => updateTime(e)
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