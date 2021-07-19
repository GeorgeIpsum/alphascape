import Discord from 'discord.js';
import { config } from 'dotenv';
config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log('ready');
});

client.login(process.env.TOKEN);
