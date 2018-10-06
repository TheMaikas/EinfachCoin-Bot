function run(message){
    const fs = require("fs");

    var blckch = fs.readFileSync("./blockchain/blockchain.json", 'utf-8');
    var blockchain = JSON.parse(blckch);

    var i = blockchain.lastBlockNumber - 100;
    var blockTime = 10*60; //No one uses this Coin so 10 minutes is okay. It will later be changed. Well, why not change it automatic :thinking:

    var block2 = require(`./../blockchain/${blockchain.lastBlockNumber}.json`);

    var difficulty = block2.difficulty;

    if(blockchain.lastBlockNumber < 100);
        try{
            var block1 = require("./../blockchain/0.json");
        }catch (err){
            return 1;
        }


        if(block1.timestamp == block2.timestamp){
            return 1;
        }

        var time1 = block1.timestamp;
        var time2 = Math.floor(Date.now() / 1000);

        var timeis = time2 - time1;
        var timeshouldbe = (parseInt(block2.blocknumber) - parseInt(block1.blocknumber)) * blockTime;

        var timedifferencep = ((timeshouldbe / timeis) * 100);
        difficulty = difficulty * ((timedifferencep * difficulty) / 100);
        delete block2;
        if (difficulty == Infinity){
            message.channel.send(":warning: WHAT THE FUCK???? INTEGER OVERFLOW!!! SELFDESTRUCT!!!!!!!!");
        }
        if(difficulty < 1){
            difficulty = 1;
            return 1;
        }
        return difficulty;

}

module.exports = {
    run: run
}