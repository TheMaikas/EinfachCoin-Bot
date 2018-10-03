function run(message){
    const fs = require("fs");
    const gna = require('./../generateNewAddress.js');
    const userdata = require(`./../../saves/users/${message.author.id}.json`);

    var lastbalance;

    for(x in userdata.addresses){
        lastbalance = message.channel.send(userdata.addresses[x].balance);
    }

    if(lastbalance = 0){
        message.channel.send("You don't need a new address! There are no coins on your newest address!")
    }else{
        var newAddress = gna.run(message);
        userdata.addresses[newAddress] = {balance: 0};
        fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(userdata, null, 4));
    }
}


module.exports = {
    run: run
}