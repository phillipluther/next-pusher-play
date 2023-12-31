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
} as Pusher.Options);

export async function POST(req: Request) {
  const data = await req.json();
  channels.trigger('channel-test-connect', 'event-test-receipt', data);

  return new Response(JSON.stringify({ message: 'Event sent', data }), {
    status: 200,
  });
}
