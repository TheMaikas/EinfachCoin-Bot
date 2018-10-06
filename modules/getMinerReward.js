function run(message){
    var miner = require(`./../saves/users/${message.author.id}.json`);
    const fs = require("fs");

    for(x in miner.addresses){
        miner.addresses[x].balance = miner.addresses[x].balance + 10;
        fs.writeFile(`./saves/users/${message.author.id}`, JSON.stringify(miner, null, 4));
        return;
    }
}

module.exports = {
    run: run
}