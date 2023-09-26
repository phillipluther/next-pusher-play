import Pusher from 'pusher-js';

export function initPusher(onMessage: Function = () => undefined) {
  const channels = new Pusher('cd14d343b34bcf4ff3ee', {
    cluster: 'us3',
  });

  // channels get created when needed; any name will work
  const channel = channels.subscribe('channel-test-connect');

  channel.bind('event-test-receipt', function (data: unknown) {
    console.log('Pusher event received', data);
    onMessage(data);
  });

  console.log('Pusher initialized');
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
