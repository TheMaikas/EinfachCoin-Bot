function run(message, client) {
    const fs = require('fs');
    const diff = require("../calculatedifficulty.js");
    var lastBlockNumber = JSON.parse(fs.readFileSync("./blockchain/blockchain.json", 'utf-8')).lastBlockNumber;
    message.channel.send({
        embed: {
            color: 2007070,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "EinfachCoin Statistiken",
            description: "<:EinfachCoin:437267554377924608> <:EinfachCoin:437267554377924608> <:EinfachCoin:437267554377924608> <:EinfachCoin:437267554377924608> <:EinfachCoin:437267554377924608>",
            fields: [{
                    name: "Servers",
                    value: client.guilds.array().length
                },
                {
                    name: "Blocks",
                    value: lastBlockNumber
                },
                {
                    name: "Difficulty",
                    value: diff.run()[0].toString()
                }
            ],
            footer: {
                icon_url: client.user.avatarURL,
                text: "© EinfachCoin"
            }
        }
    })
    .then(msg => {
        msg.delete
    });

}

module.exports = {
    run: run
}