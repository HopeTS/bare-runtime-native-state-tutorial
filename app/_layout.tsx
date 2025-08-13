import { Tabs } from 'expo-router';

import { AppProvider } from '@/state/AppProvider';
import { RPCBridge } from '@/components/RPCBridge';

export default function Layout() {
  return (
    <AppProvider>
      <RPCBridge />
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
      </Tabs>
    </AppProvider>
  );
}
