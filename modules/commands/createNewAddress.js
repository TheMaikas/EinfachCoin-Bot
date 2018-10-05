function run(message){
    let start = Date.now();
    const fs = require("fs");
    const gna = require('./../generateNewAddress.js');
    const userdata = require(`./../../saves/users/${message.author.id}.json`);

    var lastbalance;

    for(let x in userdata.addresses){
        lastbalance = userdata.addresses[x].balance;
    }

    if(lastbalance == 0){
        message.channel.send("You don't need a new address! There are no coins on your newest address!")
    }else{
        var newAddress = gna.run(message);
        userdata.addresses[newAddress] = {balance: 0};
        fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(userdata, null, 4));
    }
    console.log("It took " + (Date.now() - start) + " ms to execute 'createNewAddress.js'");
}



module.exports = {
    run: run
}