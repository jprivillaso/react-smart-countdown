import React from 'react';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

import * as S from './styled';

function App() {
  return (
    <S.Main>
      <Header />
      <Body />
      <Footer />
    </S.Main>
  );
}

export default App;
