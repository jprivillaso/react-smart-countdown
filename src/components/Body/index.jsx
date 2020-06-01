import React from 'react';

import * as S from './styled';
import { UserConsumer } from '../../hooks/useContext';

function App() {
  return (
    <UserConsumer>
      {({ countdown }) => {
        return (
          <S.Body>
            <S.InfoText />
            <S.Time>{ countdown ? 'T' : 'F' }</S.Time>
            <S.PauseIcon />
          </S.Body>
        )
      }}
    </UserConsumer>
  );
}

export default App;