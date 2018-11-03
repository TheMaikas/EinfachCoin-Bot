let start = Date.now();
const fs = require('fs');
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const readyEvent = require("./modules/events/readyEvent");
const messageEvent = require("./modules/events/messageEvent");
const r = require('rethinkdb');
var connection = null;


client.on("ready", () => {
  readyEvent.run(client);
});

client.on("guildCreate", guild => {
  //TO-DO
});

client.on("guildDelete",guild => {
  //TO-DO
});

client.on("message", message => {
  messageEvent.run(message, client);
});

client.login(config.token);

var connection = null;

r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
});



console.log("Started in " + (Date.now() - start) + " ms");

module.exports = connection;