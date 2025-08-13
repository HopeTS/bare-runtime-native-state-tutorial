import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native';
import { Worklet } from 'react-native-bare-kit';
import RPC from 'bare-rpc';
import b4a from 'b4a';

import 'expo-router/entry';

import { useRPC } from '@/state/RPCContext';
import { useCounter } from '@/state/CounterContext';
import * as commands from '../rpc-commands.mjs';
import bundle from './app.bundle.mjs';

export default function App() {
  const counter = useCounter();
  const rpc = useRPC();

  const onIncrement = () => {
    console.log('Incrementing counter...');
    if (!rpc) {
      console.warn('RPC not initialized');
      return;
    }

    const req = rpc.request(commands.RPC_INCREMENT);
    req.send('1');
    return;
  };

  const onDecrement = () => {
    console.log('Decrementing counter...');
    if (!rpc) {
      console.warn('RPC not initialized');
      return;
    }

    const req = rpc.request(commands.RPC_DECREMENT);
    req.send('1');
    return;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bare RPC Example</Text>

      <Text style={styles.counter}>{counter.count}</Text>

      <Button title="increment" onPress={() => onIncrement()} />
      <Button title="decrement" onPress={() => onDecrement()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011501',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#b0d943',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#333',
  },
  dataItem: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  counter: {
    color: '#fff',
  },
});
