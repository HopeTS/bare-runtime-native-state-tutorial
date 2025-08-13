import { createContext, useContext, useState, ReactNode } from 'react';
import RPC from 'bare-rpc';

import { RPCState } from '@/types';

const RPCContext = createContext<RPCState>({
  rpc: null,
  ready: false,
  setRPC: () => {},
});

export function RPCProvider({ children }: { children: ReactNode }) {
  const [rpc, setRPC] = useState<RPC | null>(null);
  const [ready, setReady] = useState<boolean>(false);

  return (
    <RPCContext.Provider value={{ rpc, ready, setRPC }}>
      {children}
    </RPCContext.Provider>
  );
}

export function useRPC(): RPCState['rpc'] {
  const context = useContext(RPCContext);
  if (!context) {
    throw new Error('useRPC must be used within a RPCProvider');
  }
  return context.rpc;
}

export function useRPCReady(): RPCState['ready'] {
  const context = useContext(RPCContext);
  if (!context) {
    throw new Error('useRPCReady must be used within a RPCProvider');
  }
  return context.ready;
}

export function useRPCDispatch() {
  const context = useContext(RPCContext);
  if (!context) {
    throw new Error('useRPCDispatch must be used within a RPCProvider');
  }
  return context.setRPC;
}
