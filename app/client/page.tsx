'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePusher } from '@/lib/pusher';
import type { Message } from '@/app/page';

export default function Client() {
  const pusher = usePusher();
  const [messages, updateMessages] = useState<Message[]>([]);

  pusher
    .subscribe('channel-test-connect')
    .bind('event-test-receipt', function (data: Message) {
      updateMessages([...messages, data]);
    });

  return (
    <main className="max-w-xl mx-auto p-12">
      <h1 className="text-4xl font-bold mb-4">Client Page</h1>
      <p>Messages sent from the <Link href="/">home page</Link> show up here.</p>

      <hr className="mt-8 mb-4" />

      <ul>
        {messages.map((message) => (
          <li key={message.timestamp}>{message.message}:: {message.timestamp}</li>
        ))}
      </ul>
    </main>
  );
}
