import './globals.css';
import type { Metadata } from 'next';
import PusherProvider from '@/lib/pusher';

export const metadata: Metadata = {
  title: 'Next+Pusher POC',
  description: 'A little RTC experiment getting Next.js and Pusher to make nice.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PusherProvider>{children}</PusherProvider>
      </body>
    </html>
  );
}
