function run(){
    const crypto  = require("crypto");
    const fs = require("fs");
    var blckch = fs.readFileSync("./blockchain/blockchain.json", 'utf-8');
    var blockchain = JSON.parse(blckch);

    var latestBlockNumber = blockchain.lastBlockNumber;
    var latestBlock = require(`./../../blockchain/${latestBlockNumber}.json`);
    var thisBlockNumber = parseInt(latestBlockNumber) + 1;
    var thisBlockNumber2 = thisBlockNumber.toString();

    var date = Date.now();
    var date2 = date.toString();
    
    var previousHash = latestBlock.hash;
    var transactions = {};

    var blockContent = {};
    blockContent = {blocknumber: thisBlockNumber2, previousHash: latestBlock.hash, timestamp: date2, transactions: transactions};
    fs.writeFileSync("./blockchain/newblock.json", JSON.stringify(blockContent, null, 4));

    var toHash = require("./../../blockchain/newblock.json");
    toHash = fs.readFileSync("./blockchain/newblock.json", 'utf-8');
    var Hash = crypto.createHmac('sha256', toHash.toString()).digest('hex');
    var data = {};
    data = {blocknumber: thisBlockNumber2, previousHash: latestBlock.hash, hash: Hash, timestamp: date2, transactions: transactions};
    var data2 = {};
    var data2 = {lastBlockNumber: thisBlockNumber2};
    fs.writeFileSync(`./blockchain/${thisBlockNumber}.json`, JSON.stringify(data, null, 4));
    fs.writeFileSync(`./blockchain/blockchain.json`, JSON.stringify(data2, null, 4));
}

module.exports = {
    run: run
}