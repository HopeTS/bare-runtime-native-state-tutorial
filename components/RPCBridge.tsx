import { useEffect } from 'react';
import { Worklet } from 'react-native-bare-kit';
import RPC from 'bare-rpc';
import b4a from 'b4a';

import bundle from '../app/app.bundle.mjs';
import * as commands from '../rpc-commands.mjs';
import { useRPCDispatch } from '@/state/RPCContext';
import { useCounter } from '@/state/CounterContext';

export function RPCBridge() {
  const setRPC = useRPCDispatch();
  const { dispatch } = useCounter();

  useEffect(() => {
    startBridge();
  }, []);

  const startBridge = () => {
    const worklet = new Worklet();
    worklet.start('../app/app.bundle', bundle);
    const { IPC } = worklet;

    const feRPC = new RPC(IPC, req => {
      switch (req.command) {
        default:
          console.warn('Unknown RPC command:', req.command);
          break;
      }
    });

    setRPC(feRPC);
  };

  return null;
}
