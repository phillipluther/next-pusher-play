'use client';

import Link from 'next/link';
import { useEffect, useCallback } from 'react';
import { initPusher, pushData } from '@/lib/pusher';

export default function Client() {
  const subscribe = useCallback(initPusher, []);
  useEffect(subscribe);

  return (
    <main className="max-w-xl mx-auto p-12">
      <h1 className="text-4xl font-bold mb-4">Client Page</h1>
      <p>Messages sent from the <Link href="/">home page</Link> show up here.</p>

      <hr className="mt-8 mb-4" />

    </main>
  );
}
