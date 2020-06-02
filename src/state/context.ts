import React from 'react'

export enum Status {
  Ended      = 'ended',
  Paused     = 'paused',
  Started    = 'started',
  Stopped    = 'stopped',
  HalfPassed = 'half-time'
}

export interface CountdownValueContext {
  countdownValue: string;
  setCurrentValue: (currentValue: string) => void
}

export interface CountdownStatusContext {
  countdownStatus: Status;
  setCurrentStatus: (currentStatus: Status) => void
}

export type StateOrValueContext = CountdownValueContext | CountdownStatusContext | null;

const CountdownContext = React.createContext<StateOrValueContext>(null);

export const CountdownProvider = CountdownContext.Provider;
export const CountdownConsumer = CountdownContext.Consumer;

export default CountdownContext;
