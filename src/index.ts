import Discord from 'discord.js';
import { config } from 'dotenv';
config();

const client = new Discord.Client();

client.on('ready', () => {
  console.log('ready');
});

client.on('message', m => {
  if((process.env.SON && m.content.indexOf(process.env.SON) > 0) || m.content.indexOf('!a4') === 0) {
    m.channel.send('Hello, world!');
  }

  if(m.author.id === process.env.FATHER) {
    m.channel.send("Hi dad!!!!!!");
  }
});

client.on('messageReactionAdd', m => {

});

client.on('messageReactionRemove', m => {

});

client.on('messageReactionRemoveAll', m => {

});

client.on('messageReactionRemoveEmoji', m => {

});

client.on('webhookUpdate', update => {

});

client.login(process.env.TOKEN);
