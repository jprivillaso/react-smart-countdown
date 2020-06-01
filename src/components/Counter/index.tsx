import React from 'react';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

import * as S from './styled';
import { UserProvider } from '../../state/context';
import { useCountdown } from '../../hooks/useCountdown';

function App() {
  const countdown = useCountdown();

  return (
    <UserProvider value={ countdown }>
      <S.Main>
        <Header />
        <Body />
        <Footer />
      </S.Main>
    </UserProvider>
  );
}

export default App;
