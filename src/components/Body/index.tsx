import React, { useContext, ReactElement } from 'react';

import * as S from './styled';
import { Horizontal } from '../../commons/styled';

import { UserConsumer, Status, CountdownStatusContext, StateOrValueContext, CountdownValueContext } from '../../state/context';
import CountdownContext from '../../state/context';
import { isNumeric } from '../../commons/validateUserInput';

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
): string => {
  let text = '';

  if (countdownStatus === Status.HalfPassed) {
    text = 'More than halfway there!';
  } else if (countdownStatus === Status.Ended) {
    text = 'Time\'s up';
  }

  return text;
};

function App() {
  const {
    countdownStatus,
    setCurrentStatus
  } = useContext(CountdownContext) as CountdownStatusContext;
  return (
    <UserConsumer>
      {(props: StateOrValueContext) => {
        const countdownValue = (props as CountdownValueContext).countdownValue;
        let className = 'default';

        if (
          isNumeric(countdownValue.replace(':', '')) &&
          parseInt(countdownValue.replace(':', '')) <= 20
        ) {
          className = 'warning';
        }

        if (
          isNumeric(countdownValue.replace(':', '')) &&
          parseInt(countdownValue.replace(':', '')) <= 10
        ) {
          className += ' blink';
        }

        const attributes = {
          className,
          blink: 0.5
        };

        return (
          <S.Body>
            <S.InfoText>{ getInfoText(countdownStatus) }</S.InfoText>
            <Horizontal>
              <S.Time
                {...attributes}
              >{ countdownValue || '--:--' }</S.Time>
              { getControlIcon(countdownStatus, setCurrentStatus) }
            </Horizontal>
          </S.Body>
        )
      }}
    </UserConsumer>
  );
}

export default App;