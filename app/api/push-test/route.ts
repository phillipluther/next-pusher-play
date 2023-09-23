import Pusher from 'pusher-js';

const channels = new Pusher('1e27ccd9c9f02d89f97b', {
  cluster: 'us3',
});

const channel = channels.subscribe('private-channel-name');

export async function POST(req: Request) {
  channel.trigger('client-event-name', { message: 'Ok!' });

  return new Response(JSON.stringify({ message: 'Event sent' }), {
    status: 200,
  });
}
