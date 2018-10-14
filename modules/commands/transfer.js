const generateNewTxID = require("./../generateNewTxID.js");
const fs = require('fs');

var user = require(`./../../saves/users/${message.author.id}.json`);
var to;
var amount;
var fee;


function run(message){

    split = message.content.split(' ');
    to = split[1];
    amount = split[2];
    fee = split[3];

    checkAndSave();
    
}

function checkAndSave(){
    for(x in user.addresses){
        if(x.balance > amount + fee){
            var transactionid = generateNewTxID.run(message);
            user.addresses[x].balance = user.addresses[x].balance - amount;
            user.addresses[x].transactions[transactionid] = {to: to, amount: amount};
            fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(user, null, 4));
            //in pool.json schreiben
            //sender coins wegnehmen
            return;
        }
        
    }
}

module.exports = {
    run: run
}