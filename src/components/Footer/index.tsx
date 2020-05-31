import React from 'react';

import * as S from './styled';
import {
  Horizontal
} from '../../commons/styled';

function Footer() {
  return (
    <S.Footer>
      <Horizontal>
        <S.SpeedControl>
          <S.Text
            class="active"
          > 1X </S.Text>
        </S.SpeedControl>
        <S.SpeedControl>
          <S.Text>1.5X</S.Text>
        </S.SpeedControl>
        <S.SpeedControl>
          <S.Text>2X</S.Text>
        </S.SpeedControl>
      </Horizontal>
    </S.Footer>
  );
}

export default Footer;