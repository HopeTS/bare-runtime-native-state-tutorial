// /* global Bare, BareKit */

import RPC from 'bare-rpc';
import fs from 'bare-fs';
import URL from 'bare-url';
const { IPC } = BareKit;

import { RPC_INCREMENT, RPC_DECREMENT } from './rpc-commands.mjs';

console.log('Backend worklet initializing....');

let counter = 0;

const rpc = new RPC(IPC, req => {
  console.log('RPC request received:', req);

  switch (req.command) {
    case RPC_INCREMENT:
      counter++;
      console.log('Counter incremented:', counter);
      return { counter };

    case RPC_DECREMENT:
      counter--;
      console.log('Counter decremented:', counter);
      return { counter };

    case RPC_GET_COUNT:
      console.log('Current counter value:', counter);
      return { counter };

    default:
      console.error('Unknown RPC command:', req.command);
      return { error: 'Unknown command' };
  }
});
