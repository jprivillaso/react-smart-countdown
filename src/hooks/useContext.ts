import React from 'react'

export interface CountdownContext {
  countdown: boolean;
  setCurrentCountdown: (currentCountdown: boolean) => void;
}

const initialContext = {
  countdown: false,
  setCurrentCountdown: () => {}
};

const UserContext = React.createContext<CountdownContext>(initialContext);

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
