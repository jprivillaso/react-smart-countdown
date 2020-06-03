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
