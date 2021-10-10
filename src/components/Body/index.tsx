import { useContext, ReactElement } from 'react';

import { Horizontal } from '../../commons/styled';
import { isNumeric } from '../../commons/utils';
import { Status } from '../../commons/types';
import Time from '../Time';
import Text from '../Text';
import { TimeProps } from '../Time/Time.types';
import { StartIcon, PauseIcon } from '../Icons';
import CountdownContext, { CountdownConsumer } from '../../state/context';
import * as S from './styled';

const getControlIcon = (
  countdownValue: string,
  countdownStatus: Status,
  setCurrentStatus: (currentStatus: Status) => void,
): ReactElement => {
  if (!countdownValue) {
    return <></>;
  }

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

  const parseCurrentValue = (value: string) => parseInt(value.replace(':', ''), 10);

  return (
    <CountdownConsumer>
      {({ countdownValue }) => {
        const attributes: TimeProps = {
          blinkSpeed: 0.5,
        };

        // Less than 20 seconds
        if (isNumeric(countdownValue.replace(':', '')) && parseCurrentValue(countdownValue) <= 20) {
          attributes.warning = true;
        }

        // Less than 10 seconds
        if (isNumeric(countdownValue.replace(':', '')) && parseCurrentValue(countdownValue) <= 10) {
          attributes.blink = true;
        }

        return (
          <S.Body>
            <Text error={true}>{getInfoText(countdownStatus)}</Text>
            <Horizontal>
              <Time {...attributes}>{countdownValue || '--:--'}</Time>
              {getControlIcon(countdownValue, countdownStatus, setCurrentStatus)}
            </Horizontal>
          </S.Body>
        );
      }}
    </CountdownConsumer>
  );
}

export default App;
