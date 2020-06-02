import React, { useContext } from 'react';

import * as S from './styled';
import {
  Horizontal
} from '../../commons/styled';
import CountdownContext from '../../state/context';

function Footer() {
  const { setCurrentSpeed } = useContext(CountdownContext);

  return (
    <S.Footer>
      <Horizontal>
        <S.SpeedControl className="active">
          <S.Text
            onClick={() => setCurrentSpeed(1000)}
          > 1X </S.Text>
        </S.SpeedControl>
        <S.SpeedControl>
          <S.Text
            onClick={() => setCurrentSpeed(800)}
          >1.5X</S.Text>
        </S.SpeedControl>
        <S.SpeedControl>
          <S.Text
            onClick={() => setCurrentSpeed(500)}
          >2X</S.Text>
        </S.SpeedControl>
      </Horizontal>
    </S.Footer>
  );
}

export default Footer;