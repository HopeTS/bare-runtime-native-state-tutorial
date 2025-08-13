import { CounterProvider } from './CounterContext';
import { RPCProvider } from './RPCContext';

// TODO: Wrap all providers in the AppProvider

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <CounterProvider>
      <RPCProvider>{children}</RPCProvider>
    </CounterProvider>
  );
}
