import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from 'react';

import { CounterAction, CounterState } from '@/types';

const CounterContext = createContext<
  (CounterState & { dispatch: Dispatch<CounterAction> }) | undefined
>(undefined);

function counterReducer(
  state: CounterState,
  action: CounterAction,
): CounterState {
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.payload };
    default:
      return state;
  }
}

export function CounterProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(counterReducer, { count: 341 });

  return (
    <CounterContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}
