function run(message) {
    const fs = require("fs");

    var blckch = fs.readFileSync("./blockchain/blockchain.json", 'utf-8');
    var blockchain = JSON.parse(blckch);
    var blockTime = JSON.parse(fs.readFileSync("./config.json", "utf-8")).blocktime;


    var i = blockchain.lastBlockNumber - 100;

    var block2 = require(`../blockchain/${blockchain.lastBlockNumber}.json`);

    var difficulty = block2.difficulty;

    if (blockchain.lastBlockNumber < 100) {
        try {
            var block1 = require("../blockchain/0.json");
        } catch (err) {
            return [1, null, null];
        }
    } else {
        var block1 = require(`../blockchain/${i}.json`);
        var block0 = require(`../blockchain/${i}.json`)
    }
    
    blocksare = block2.blocknumber;
    blocksshouldbe = Math.round((Math.floor(Date.now() / 1000) - block1.timestamp) / (blockTime)) + (i - 1);

    blocksshouldbetotal = Math.round((Math.floor(Date.now() / 1000) - block0.timestamp) / (blockTime));


    if (block1.timestamp == block2.timestamp) {
        return [1, blocksare, blocksshouldbe];
    }

    var blockdifferencep = (blocksare / blocksshouldbe);
    var blockdifferencetotalp = (blocksare / blocksshouldbetotal);
    difficulty = difficulty * ( ( blockdifferencep + 5 ) / 6 );
    difficulty = difficulty * ( ( blockdifferencetotalp + 5 ) / 6 );
    delete block2;
    if (difficulty == Infinity) {
        message.channel.send(":warning: INTEGER OVERFLOW!!!")
        .then(msg => {
            msg.delete(60000);
        });
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