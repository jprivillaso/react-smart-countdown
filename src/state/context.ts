import React from 'react'

export enum Status {
  Ended      = 'ended',
  Paused     = 'paused',
  Started    = 'started',
  Stopped    = 'stopped',
  HalfPassed = 'half-time'
}

export interface ContextType {
  countdownValue: string;
  countdownStatus: Status;
  countdownSpeed: number;
  setCurrentValue: (currentValue: string) => void;
  setCurrentStatus: (currentStatus: Status) => void;
  setCurrentSpeed: (currentStatus: number) => void;
}

const initialState = {
  countdownValue: '',
  countdownStatus: Status.Stopped,
  countdownSpeed: 1,
  setCurrentValue: () => {},
  setCurrentStatus: () => {},
  setCurrentSpeed: () => {}
};

const CountdownContext = React.createContext<ContextType>(initialState);

export const CountdownProvider = CountdownContext.Provider;
export const CountdownConsumer = CountdownContext.Consumer;

export default CountdownContext;
