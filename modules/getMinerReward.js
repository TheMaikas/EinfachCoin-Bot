function run(message){
    var miner = require(`./../saves/users/${message.author.id}.json`);
    const generateNewTxID = require("./generateNewTxID.js")
    const fs = require("fs");

    for(x in miner.addresses){
        var transactionid = generateNewTxID.run(message);
        miner.addresses[x].balance = miner.addresses[x].balance + 10;
        miner.addresses[x].transactions[transactionid] = {from: "0xEFC0000000000000000000000000000000000000000000000000000000000000000", amount: 10};
        fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(miner, null, 4));
        return;
    }
}

module.exports = {
    run: run
}