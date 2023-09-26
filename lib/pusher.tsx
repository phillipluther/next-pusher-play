'use client';

import Pusher from 'pusher-js';
import { useContext, createContext } from 'react';

const channels = new Pusher('cd14d343b34bcf4ff3ee', {
  cluster: 'us3',
});

export const PusherContext = createContext(channels);

export function usePusher() {
  return useContext(PusherContext);
}

export default function PusherProvider({ children }: { children: React.ReactNode }) {
  return (
    <PusherContext.Provider value={channels}>{children}</PusherContext.Provider>
  );
}

export async function pushData(data: unknown) {
  const res = await fetch('/api/push-test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.error('#pushfail');
  }
}
