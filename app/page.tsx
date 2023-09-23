'use client';

import Pusher from 'pusher-js';
import { useEffect, useCallback } from 'react';
import { initPusher, pushData } from '@/lib/pusher';

export default function Home() {
  const sub = useCallback(() => {
    const channels = new Pusher('1e27ccd9c9f02d89f97b', {
      cluster: 'us3',
    });
  
    // channels get created when needed; any name will work
    const channel = channels.subscribe('private-channel-name');
  
    channel.bind('event-name', function (data: unknown) {
      console.log('Pusher event received', data)
    });
  
    console.log('Pusher initialized');
  }, []);

  function relayData() {
    pushData({
      message: 'Hello, world!',
      timestamp: Date.now(),
    });
  }

  useEffect(sub);

  return (
    <main>
      <h1>Next+Pusher POC</h1>
      <p>A little RTC experiment getting Next.js and Pusher to make nice.</p>

      <hr />

      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={relayData}>
        Push Data!
      </button>
    </main>
  );
}
