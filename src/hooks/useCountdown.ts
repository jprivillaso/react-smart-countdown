import { useState, useCallback } from 'react';
import { StatusOrValueContext } from '../state/context';

// Use this hook in order to keep the status and value from the countdown
export const useCountdown = (): StatusOrValueContext => {
  const [countdownStatus, setStatus] = useState(false);
  const [countdownValue, setValue] = useState('');

  const setCurrentStatus = useCallback((currentStatus: boolean): void => {
    setStatus(currentStatus);
  }, []);

  const setCurrentValue = useCallback((currentValue: string): void => {
    setValue(currentValue);
  }, []);

  return {
    countdownStatus,
    setCurrentStatus,
    countdownValue,
    setCurrentValue
  }
}