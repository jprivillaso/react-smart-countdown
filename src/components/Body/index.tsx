import React, { useContext, ReactElement } from 'react';

import { Horizontal } from '../../commons/styled';
import { isNumeric } from '../../commons/utils';
import { Status } from '../../commons/types';
import Time from '../Time';
import Text from '../Text';
import { StartIcon, PauseIcon } from '../Icons';
import { CountdownConsumer } from '../../state/context';
import CountdownContext from '../../state/context';

import * as S from './styled';

const getControlIcon = (countdownStatus: Status, setCurrentStatus: Function): ReactElement => {
  return countdownStatus === Status.Ended || countdownStatus === Status.Paused ? (
    <StartIcon onClick={() => setCurrentStatus(Status.Started)} />
  ) : (
    <PauseIcon onClick={() => setCurrentStatus(Status.Paused)} />
  );
};

const getInfoText = (countdownStatus: Status): string => {
  let text = '';

  if (countdownStatus === Status.HalfPassed) {
    text = 'More than halfway there!';
  } else if (countdownStatus === Status.Ended) {
    text = "Time's up";
  }

  return text;
};

function App() {
  const { countdownStatus, setCurrentStatus } = useContext(CountdownContext);

  const parseCurrentValue = (value: string) => parseInt(value.replace(':', ''));

  return (
    <CountdownConsumer>
      {({ countdownValue }) => {
        let className = 'default';

        // Less than 20 seconds
        if (isNumeric(countdownValue.replace(':', '')) && parseCurrentValue(countdownValue) <= 20) {
          className = 'warning';
        }

        // Less than 10 seconds
        if (isNumeric(countdownValue.replace(':', '')) && parseCurrentValue(countdownValue) <= 10) {
          className += ' blink';
        }

        const attributes = {
          className,
          blink: 0.5,
        };

        return (
          <S.Body>
            <Text error={true}>{getInfoText(countdownStatus)}</Text>
            <Horizontal>
              <Time {...attributes}>{countdownValue || '--:--'}</Time>
              {getControlIcon(countdownStatus, setCurrentStatus)}
            </Horizontal>
          </S.Body>
        );
      }}
    </CountdownConsumer>
  );
}

export default App;
