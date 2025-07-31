// Config for STUN/TURN server (using $5/month VPS)
export const iceServers = [
  { urls: 'stun:global.stun.twilio.com:3478?transport=udp' },
  { 
    urls: 'turn:your_turn_server.com:3478',
    username: process.env.TURN_USER,
    credential: process.env.TURN_PASSWORD 
  }
];
