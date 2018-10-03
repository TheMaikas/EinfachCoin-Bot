let start = Date.now();
const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const readyEvent = require("./modules/events/readyEvent");
const messageEvent = require("./modules/events/messageEvent");


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
  messageEvent.run(message);
});

client.login(config.token);
console.log(Date.now() - start + " ms");

module.exports = {
  fs: fs,
  config: config
}