import { Tabs } from 'expo-router';

import { AppProvider } from '@/state/AppProvider';

// TODO: Add RPC Bridge
// TODO: Add AppProvider

export default function Layout() {
  return (
    <AppProvider>
      <Tabs>
        <Tabs.Screen name="index" options={{ title: 'Home' }} />
      </Tabs>
    </AppProvider>
  );
}
