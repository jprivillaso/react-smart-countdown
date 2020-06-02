import { useState, useCallback } from 'react';
import { ContextType, Status } from '../state/context';

// Use this hook in order to keep the status and value from the countdown
export const useCountdown = (): ContextType => {
  const [countdownValue, setValue] = useState('');
  const [countdownStatus, setStatus] = useState(Status.Stopped);
  const [countdownSpeed, setSpeed] = useState(1000);

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