import React, { useState, useContext } from 'react';

import * as S from './styled';
import { initialTime } from '../../state';
import UserContext from '../../hooks/useContext';

function Header() {
  const [time, setTime] = useState(initialTime);

  const updateTime = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const value: string = event.currentTarget.value;
    setTime(value);
  }

  const { countdown, setCurrentCountdown } = useContext(UserContext);

  const startCountdown = () => {
    setCurrentCountdown(true);
    console.log('new countdown', countdown);
  }

  return (
    <S.Header>
      <S.Vertical>
        <S.Text>Smart Countdown</S.Text>
        <div>
          <S.Input
            placeholder="02:30"
            value={time || ''}
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