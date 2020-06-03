import { useState, useCallback } from 'react';

import { ContextType, Status } from '../commons/types';
import { COUNTER_SPEED_SLOW } from '../commons/constants';

// Use this hook in order to keep the status and value from the countdown
export const useCountdown = (): ContextType => {
  const [countdownValue, setValue] = useState('');
  const [countdownStatus, setStatus] = useState(Status.Stopped);
  const [countdownSpeed, setSpeed] = useState(COUNTER_SPEED_SLOW);

  const setCurrentValue = useCallback((value: string): void => {
    setValue(value);
  }, []);

  const setCurrentStatus = useCallback((status: Status): void => {
    setStatus(status);
  }, []);

  const setCurrentSpeed = useCallback((speed: number): void => {
    setSpeed(speed);
  }, []);

  return {
    countdownValue,
    countdownStatus,
    countdownSpeed,
    setCurrentValue,
    setCurrentStatus,
    setCurrentSpeed
  }
}
