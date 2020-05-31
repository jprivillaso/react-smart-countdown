import React from 'react';

import * as S from './styled';

function Header() {
  return (
    <S.Header>
      <S.Vertical>
        <S.Text>Smart Countdown</S.Text>
        <div>
          <S.Input
          placeholder="02:30"
          ></S.Input>
          <S.Button>Start</S.Button>
        </div>
      </S.Vertical>
    </S.Header>
  );
}

export default Header;