function run() {
    const fs = require('fs');
    var blockchain = JSON.parse(fs.readFileSync("./blockchain/blockchain.json", 'utf-8'));

    var lastBlockNumber = blockchain.lastBlockNumber;

    var blockReward = 5000 / (2 * (Math.floor(parseInt(lastBlockNumber) / 100000)));

    if (blockReward = Infinity) {
        return 5000;
    } else {
        return blockReward;
    }
}

module.exports = {
    run: run
}