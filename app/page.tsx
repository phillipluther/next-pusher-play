'use client';

import { useEffect, useCallback, useState } from 'react';
import { usePusher, pushData } from '@/lib/pusher';

export type Message = {
  message: string,
  timestamp: string,
};

export default function Home() {
  const pusher = usePusher();
  const [messages, updateMessages] = useState<Message[]>([]);

  pusher
    .subscribe('channel-test-connect')
    .bind('event-test-receipt', function (data: unknown) {
      // console.log('DATA', data);
    });

  function relayData(message: string) {
    pushData({
      message,
      timestamp: Date.now(),
    });
  }

  // useEffect(subscribe);

  return (
    <main className="max-w-xl mx-auto p-12">
      <h1 className="text-4xl font-bold mb-4">Next+Pusher POC</h1>
      <p>A little RTC experiment getting Next.js and Pusher to make nice.</p>

      <hr className="mt-8 mb-4" />

      <form onSubmit={(e) => {
        e.preventDefault();

        const target = e.target as unknown as Array<HTMLInputElement>;
        const inputField = target[0];

        relayData(inputField.value);
      }}>
        <label htmlFor="message" className="block mb-2">Message</label>
        <input
          id="message"
          type="text"
          className="border border-gray-300 rounded px-4 py-2 text-black"
          placeholder="Message"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Send Message
        </button>
      </form>

      <hr className="mt-8 mb-4" />

      <h2 className="text-xl font-bold mb-4">Messages Sent</h2>
      <ul>
        {messages.map((message) => (
          <li key={message.timestamp}>
            {message.message} at {message.timestamp}
          </li>
        ))}
      </ul>
    </main>
  );
}
