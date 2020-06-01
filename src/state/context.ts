import React from 'react'

export interface CountdownStatusContext {
  countdownStatus: boolean;
  setCurrentStatus: (currentCountdown: boolean) => void;
}

export interface CountdownValueContext {
  countdownValue: string;
  setCurrentValue: (currentValue: string) => void
}

const initialContext = {
  countdownStatus: false,
  setCurrentStatus: () => {},
};

export type StatusOrValueContext = CountdownStatusContext | CountdownValueContext;

const UserContext = React.createContext<StatusOrValueContext>(initialContext);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
