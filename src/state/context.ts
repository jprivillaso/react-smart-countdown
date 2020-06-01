import React from 'react'

export enum Status {
  Started = 'started',
  HalfPassed = 'half-time',
  Ended = 'ended'
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

export const UserProvider = CountdownContext.Provider;
export const UserConsumer = CountdownContext.Consumer;

export default CountdownContext;
