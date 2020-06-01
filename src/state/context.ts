import React from 'react'

export interface CountdownValueContext {
  countdownValue: string;
  setCurrentValue: (currentValue: string) => void
}

const initialContext = {
  countdownValue: '',
  setCurrentValue: () => {},
};

const UserContext = React.createContext<CountdownValueContext>(initialContext);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
