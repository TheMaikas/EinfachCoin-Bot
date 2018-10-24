function run(message) {
    const fs = require("fs");

    var blckch = fs.readFileSync("./blockchain/blockchain.json", 'utf-8');
    var blockchain = JSON.parse(blckch);
    var blockTime = JSON.parse(fs.readFileSync("./config.json", "utf-8")).blocktime;


    var i = blockchain.lastBlockNumber - 100;

    var block2 = require(`./../blockchain/${blockchain.lastBlockNumber}.json`);

    var difficulty = block2.difficulty;

    if (blockchain.lastBlockNumber < 100) {
        try {
            var block1 = require("./../blockchain/0.json");
        } catch (err) {
            return [1, null, null];
        }
    } else {
        var block1 = require(`./../blockchain/${i}.json`);
    }
    blocksare = block2.blocknumber;
    blocksshouldbe = Math.round((Math.floor(Date.now() / 1000) - block1.timestamp) / (blockTime));


    if (block1.timestamp == block2.timestamp) {
        return [1, blocksare, blocksshouldbe];
    }

    var blockdifferencep = (blocksare / blocksshouldbe);
    difficulty = difficulty * blockdifferencep;
    delete block2;
    if (difficulty == Infinity) {
        message.channel.send(":warning: INTEGER OVERFLOW!!!");
        return [Number.MAX_SAFE_INTEGER, blocksare, blocksshouldbe]
    }
    if (difficulty < 1) {
        difficulty = 1;
        return [1, blocksare, blocksshouldbe];
    }

    return [difficulty, blocksare, blocksshouldbe];

}

module.exports = {
    run: run
}