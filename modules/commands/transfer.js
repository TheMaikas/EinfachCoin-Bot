const generateNewTxID = require("../generatenewtxid.js");
const fs = require('fs');

var pool;
var user;
var to;
var amount;
var fee;


function run(message) {

    pool = require("./../../saves/pool.json");
    user = require(`./../../saves/users/${message.author.id}.json`);

    split = message.content.split(' ');
    if (split.length < 4) {
        message.channel.send("Vielleicht solltests du ein paar Eingaben mehr machen? ```+transfer <EMPFÄNGER> <WERT> <GEBÜHR>```")
        .then(msg => {
            msg.delete(60000);
        });
    } else {
        to = split[1];
        amount = split[2];
        fee = split[3];
        if(fee < 1) return message.channel.send(":warning: Gebühr muss mindestens 1 betragen")
        .then(msg => {
            msg.delete(60000);
        });
        checkAndSave(message);
    }
}



function checkAndSave(message) {
    for (x in user.addresses) {
        if (parseInt(user.addresses[x].balance) > parseInt(amount) + parseInt(fee)) {
            var transactionid = generateNewTxID.run(message);
            if (pool.fee[fee] == undefined) {
                pool.fee[fee] = {};
            }
            pool.fee[fee][transactionid] = {
                from: x,
                to: to,
                amount: amount,
                fee: fee,
                timestamp: (Math.floor(Date.now() / 1000)).toString()
            };
            user.addresses[x].balance = user.addresses[x].balance - amount;
            user.addresses[x].transactions[transactionid] = {
                to: to,
                amount: amount
            };
            fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(user, null, 4));

            fs.writeFile("./saves/pool.json", JSON.stringify(pool, null, 4));
            return;
        }

    }
}

module.exports = {
    run: run
}