const generateNewTxID = require("./../generateNewTxID.js");
const fs = require('fs');

var pool; 
var user; 
var to;
var amount;
var fee;


function run(message){

    pool = require("./../../saves/pool.json");
    user = require(`./../../saves/users/${message.author.id}.json`);

    split = message.content.split(' ');
    if (split.length < 4){
        message.channel.send("Maybe you should give some more parameters? ```+transfer <TO> <AMOUNT> <FEE>```");
    }else{
        to = split[1];
        amount = split[2];
        fee = split[3];
        checkAndSave(message);
    }
}



function checkAndSave(message){
    for(x in user.addresses){
        console.log("hi");
        console.log(user.addresses[x].balance + " " + amount + " " + fee);
        if(user.addresses[x].balance > amount + fee){
            console.log("hi 2")
            
            var transactionid = generateNewTxID.run(message);
            console.log(transactionid);
            if(pool.fee[fee] == undefined){
                pool.fee[fee] = {};
            }
            pool.fee[fee][transactionid] = {from: x, to: to, amount: amount, fee: fee, timestamp: (Math.floor(Date.now() / 1000)).toString()};
            user.addresses[x].balance = user.addresses[x].balance - amount;
            user.addresses[x].transactions[transactionid] = {to: to, amount: amount};
            fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(user, null, 4));

            fs.writeFile("./saves/pool.json", JSON.stringify(pool, null, 4));
            return;
        }
        
    }
}

module.exports = {
    run: run
}