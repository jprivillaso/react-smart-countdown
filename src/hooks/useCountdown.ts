import { useState, useCallback } from 'react';
import { CountdownValueContext } from '../state/context';

// Use this hook in order to keep the status and value from the countdown
export const useCountdown = (): CountdownValueContext => {
  const [countdownValue, setValue] = useState('');

  const setCurrentValue = useCallback((currentValue: string): void => {
    setValue(currentValue);
  }, []);

  return {
    countdownValue,
    setCurrentValue
  }
}