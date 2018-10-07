function run(client){
    const diff = require("./../calculateDifficulty.js"); 
    const blocks = require("./../../blockchain/blockchain.json").lastBlockNumber;
    client.user.setActivity(`für ${client.users.array().length} Nutzer.`, { type:"PLAYING"});
    console.log(client.guilds);
    setInterval(function() {
        let statusint = Math.floor(Math.random() * Math.floor(7));
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
                client.user.setActivity("+createWallet", {type: "PLAYING"});
                break;
            case 4:
                client.user.setActivity("+help", {type: "PLAYING"});
                break;
            case 5:
                client.user.setActivity(blocks + ' blocks', {type: "PLAYING"});
                break;
            case 6:
                client.user.setActivity(diff.run(), {type: "PLAYING"});
                break;
        }
  }, 30000);
}

module.exports = {
    run: run
}