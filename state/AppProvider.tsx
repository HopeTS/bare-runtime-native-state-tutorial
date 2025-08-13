import { CounterProvider } from './CounterContext';

// TODO: Wrap all providers in the AppProvider

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <CounterProvider>{children}</CounterProvider>;
}
