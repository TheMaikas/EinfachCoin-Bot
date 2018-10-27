function run(client) {
    const diff = require("../calculatedifficulty.js");
    const fs = require('fs');
    const blocks = (JSON.parse(fs.readFileSync("./blockchain/blockchain.json", 'utf-8'))).lastBlockNumber;
    const DBL = require("dblapi.js");
    const config = require("./../../config.json");
    const dbl = new DBL(config.dbltoken, client);

    setInterval(function () {
        let statusint = Math.floor(Math.random() * Math.floor(7));
        switch (statusint) {
            case 0:
                client.user.setActivity(`for ${client.users.array().length} Users.`, {
                    type: "PLAYING"
                });
                break;
            case 1:
                client.user.setActivity(`on ${client.guilds.array().length} Servers.`, {
                    type: "WATCHING"
                });
                break;
            case 2:
                client.user.setActivity(`in ${client.channels.array().length} Channels.`, {
                    type: "LISTENING"
                });
                break;
            case 3:
                client.user.setActivity("+createWallet", {
                    type: "PLAYING"
                });
                break;
            case 4:
                client.user.setActivity("+help", {
                    type: "PLAYING"
                });
                break;
            case 5:
                client.user.setActivity(blocks + ' blocks', {
                    type: "PLAYING"
                });
                break;
            case 6:
                client.user.setActivity("Difficulty " + diff.run(), {
                    type: "PLAYING"
                });
                break;
        }
    }, 30000);

    setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 1800000);
}

module.exports = {
    run: run
}