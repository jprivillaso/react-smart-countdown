import { useState, useCallback } from 'react';
import { StateOrValueContext, Status } from '../state/context';

// Use this hook in order to keep the status and value from the countdown
export const useCountdown = (): StateOrValueContext => {
  const [countdownValue, setValue] = useState('');
  const [countdownStatus, setStatus] = useState(Status.Ended);

  const setCurrentValue = useCallback((value: string): void => {
    setValue(value);
  }, []);

  const setCurrentStatus = useCallback((status: Status): void => {
    setStatus(status);
  }, []);

  return {
    countdownValue,
    countdownStatus,
    setCurrentValue,
    setCurrentStatus
  }
}