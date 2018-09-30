function run(client){
  client.user.setActivity(`für ${client.users.array().length} Nutzer.`, { type:"PLAYING"});
  setInterval(function() {
    let statusint = Math.floor(Math.random() * Math.floor(4));
    switch (statusint) {
        case 0:
            client.user.setActivity(`für ${client.users.array().length} Nutzer.`, { type: "PLAYING" });
            break;
        case 1:
            client.user.setActivity(`auf ${client.guilds.array().length} Servern.`, { type: "WATCHING" });
            break;
        case 2:
            client.user.setActivity(`in ${client.channels.array().length} Kanälen.`, { type: "LISTENING" });
            break;
        case 3:
            client.user.setActivity(".help", {type: "PLAYING"});
            break;
    }
  }, 60000);
}

module.exports = {
    run: run
}