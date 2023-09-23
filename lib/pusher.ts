import Pusher from 'pusher-js';

export function initPusher() {
  const channels = new Pusher('1e27ccd9c9f02d89f97b', {
    cluster: 'us3',
  });

  // channels get created when needed; any name will work
  const channel = channels.subscribe('channel-test-connect');

  channel.bind('event-test-receipt', function (data: unknown) {
    console.log('Pusher event received', data)
    alert('Got it!');
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
