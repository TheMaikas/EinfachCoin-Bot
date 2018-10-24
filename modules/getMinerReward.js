function run(message) {
    const fs = require("fs");
    var miner = fs.readFileSync(`./saves/users/${message.author.id}.json`, 'utf-8');
    const generateNewTxID = require("./generateNewTxID.js")
    console.log("WTF");

    for (x in miner.addresses) {
        var transactionid = generateNewTxID.run(message);
        miner.addresses[x].balance = miner.addresses[x].balance + 10;
        miner.addresses[x].transactions[transactionid] = {
            from: "0xEFC0000000000000000000000000000000000000000000000000000000000000000",
            amount: 10,
            timestamp: (Math.floor(Date.now() / 1000)).toString()
        };
        fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(miner, null, 4));
        return;
    }
}

module.exports = {
    run: run
}