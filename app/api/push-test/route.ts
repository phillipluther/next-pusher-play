import Pusher from 'pusher';

const {
  APP_ID: appId,
  KEY: key,
  SECRET: secret,
  CLUSTER: cluster,
} = process.env;

const channels = new Pusher({
  appId,
  key,
  secret,
  cluster,
});

export async function POST(req: Request) {
  channels.trigger('channel-test-connect', 'event-test-receipt', { message: 'Ok!' });

  return new Response(JSON.stringify({ message: 'Event sent' }), {
    status: 200,
  });
}
