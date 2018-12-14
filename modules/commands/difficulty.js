function run(message, client) {
    const diff = require("../calculatedifficulty.js");
    const blockchain = require("./../../blockchain/blockchain.json");

    var difficultyreturn = diff.run(message);
    console.log(difficultyreturn);
    var difficulty = difficultyreturn[0];
    var blocksare = difficultyreturn[1];
    var blocksshouldbe = difficultyreturn[2];
    message.channel.send({
        embed: {
            color: 2007070,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: "EinfachCoin Schwierigkeit Statistiken",
            fields: [{
                    name: "Schwierigkeit: ",
                    value: " " + difficulty
                }
            ],
            footer: {
                icon_url: client.user.avatarURL,
                text: "© EinfachCoin"
            }
        }
    })
    .then(msg => {
        msg.delete(60000);
    });
}

module.exports = {
    run: run
}