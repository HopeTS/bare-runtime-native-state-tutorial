import RPC from 'bare-rpc';

export type CounterState = {
  count: number;
};

export type CounterAction = {
  type: 'SET_COUNT';
  payload: number;
};
