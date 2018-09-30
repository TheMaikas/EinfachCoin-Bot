let start = Date.now();
const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const readyEvent = require("./modules/events/readyEvent");
const messageEvent = require("./modules/events/messageEvent");
const crypto = require('crypto');

const toHash = 'test'

setInterval(function(){
  const hash = crypto.createHmac('sha256', toHash).digest('hex');
  console.log(hash);
}, 100)


client.on("ready", () => {
  readyEvent.run(client);
});

client.on("guildCreate", guild => {
  //TO-DO
});

client.on("guildDelete", guild => {
  //TO-DO
});

client.on("message", message => {
  MessageEvent.run(message);
});

client.login(config.token);