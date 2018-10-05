function run(message){
    let start = Date.now();
    const crypto  = require("crypto");
    const fs = require("fs");
    const calculateDifficulty = require("./../calculateDifficulty.js");

    var blckch = fs.readFileSync("./blockchain/blockchain.json", 'utf-8');
    var blockchain = JSON.parse(blckch);

    var latestBlockNumber = blockchain.lastBlockNumber;
    var latestBlock = require(`./../../blockchain/${latestBlockNumber}.json`);

    var thisBlockNumber = parseInt(latestBlockNumber) + 1;
    var thisBlockNumber2 = thisBlockNumber.toString();

    var date = Math.floor(Date.now() / 1000);
    var date2 = date.toString();
    
    var previousHash = latestBlock.hash;

    var transactions = {};

    var difficultyvalue = calculateDifficulty.run(message);

    var toHash = {blocknumber: thisBlockNumber2, previousHash: latestBlock.hash, difficulty: difficultyvalue, timestamp: date2, transactions: transactions};
    console.log(toHash);
    var Hash = crypto.createHmac('sha256', toHash.toString()).digest('hex');

    var data = {blocknumber: thisBlockNumber2, previousHash: latestBlock.hash, hash: Hash, difficulty: difficultyvalue, timestamp: date2, transactions: transactions};

    var data2 = {lastBlockNumber: thisBlockNumber2};

    fs.writeFile(`./blockchain/${thisBlockNumber}.json`, JSON.stringify(data, null, 4));
    fs.writeFile(`./blockchain/blockchain.json`, JSON.stringify(data2, null, 4));
    console.log("It took " + (Date.now() - start) + " ms to execute 'mine.js'");
}

module.exports = {
    run: run
}