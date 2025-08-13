import { Tabs } from 'expo-router';

// TODO: Add RPC Bridge
// TODO: Add AppProvider

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
    </Tabs>
  );
}
