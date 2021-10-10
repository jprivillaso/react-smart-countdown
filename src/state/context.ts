/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import { Status, ContextType } from '../commons/types';
import { SPEED_SLOW } from '../commons/constants';

const initialState = {
  countdownValue: '',
  countdownStatus: Status.Stopped,
  countdownSpeed: SPEED_SLOW,
  setCurrentValue: () => {},
  setCurrentStatus: () => {},
  setCurrentSpeed: () => {},
};

const CountdownContext = React.createContext<ContextType>(initialState);

export const CountdownProvider = CountdownContext.Provider;
export const CountdownConsumer = CountdownContext.Consumer;

export default CountdownContext;
