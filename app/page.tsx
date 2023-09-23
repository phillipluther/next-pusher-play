'use client';

import Pusher from 'pusher-js';
import { useEffect, useCallback } from 'react';
import { initPusher, pushData } from '@/lib/pusher';

export default function Home() {
  const sub = useCallback(initPusher, []);

  function relayData() {
    pushData({
      message: 'Hello, world!',
      timestamp: Date.now(),
    });
  }

  useEffect(sub);

  return (
    <main className="max-w-xl mx-auto p-12">
      <h1 className="text-4xl font-bold mb-4">Next+Pusher POC</h1>
      <p>A little RTC experiment getting Next.js and Pusher to make nice.</p>

      <hr className="mt-8 mb-4" />

      <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={relayData}>
        Push Data!
      </button>
    </main>
  );
}
