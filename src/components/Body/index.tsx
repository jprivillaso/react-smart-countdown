import React, { useContext, ReactElement } from 'react';

import * as S from './styled';
import { Horizontal } from '../../commons/styled';

import { UserConsumer, Status, CountdownStatusContext, StateOrValueContext, CountdownValueContext } from '../../state/context';
import CountdownContext from '../../state/context';

const getControlIcon = (
  countdownStatus: Status,
  setCurrentStatus: Function
): ReactElement => {
  return (
    countdownStatus === Status.Ended ||
    countdownStatus === Status.Paused ?
    (
      <S.StartIcon
        onClick={() => setCurrentStatus(Status.Started)}
      />
    ) :
    (
      <S.PauseIcon
        onClick={() => setCurrentStatus(Status.Paused)}
      />
    )
  )
};

const getInfoText = (
  countdownStatus: Status
): ReactElement => {
  let text = '';

  if (countdownStatus === Status.HalfPassed) {
    text = 'More than halfway there!';
  } else if (countdownStatus === Status.Ended) {
    text = 'Time\'s up';
  }

  return (
    <S.InfoText>{ text }</S.InfoText>
  );
};

function App() {
  const {
    countdownStatus,
    setCurrentStatus
  } = useContext(CountdownContext) as CountdownStatusContext;

  return (
    <UserConsumer>
      {(props: StateOrValueContext) => {
        return (
          <S.Body>
            { getInfoText(countdownStatus) }
            <Horizontal>
              <S.Time>
                {(props as CountdownValueContext).countdownValue || '--:--'}
              </S.Time>
              { getControlIcon(countdownStatus, setCurrentStatus) }
            </Horizontal>
          </S.Body>
        )
      }}
    </UserConsumer>
  );
}

export default App;