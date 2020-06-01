import { useState, useCallback } from 'react';
import { CountdownContext } from './useContext';

export const useCountdown = (): CountdownContext => {
  const [countdown, setCountdown] = useState(false);

  const setCurrentCountdown = useCallback((currentCountdown: boolean): void => {
    setCountdown(currentCountdown);
  }, []);

  return {
    countdown,
    setCurrentCountdown
  }
}