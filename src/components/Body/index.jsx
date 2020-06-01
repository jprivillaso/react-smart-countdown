import React from 'react';

import * as S from './styled';
import { UserConsumer } from '../../state/context';

function App() {
  return (
    <UserConsumer>
      {({ countdownStatus }) => {
        return (
          <S.Body>
            <S.InfoText />
            <S.Time>{ countdownStatus || '--:--' }</S.Time>
            <S.PauseIcon />
          </S.Body>
        )
      }}
    </UserConsumer>
  );
}

export default App;