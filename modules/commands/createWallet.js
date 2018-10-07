function run(message){

    let start = Date.now();

    try{

        require(`./../../saves/users/${message.author.id}.json`);
        message.channel.send("You already have a wallet? WTF?");

    }catch(err){

        const fs = require("fs");
        const gna = require("../generateNewAddress.js");
        var newAddress = gna.run(message);
        
        var data = {};
        data['addresses'] = {};
        data.addresses[newAddress] = {balance: 0}
        data.addresses[newAddress]['transactions'] = {};

        fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(data, null, 4));
        message.channel.send("Wallet created!")
    }
    console.log("It took " + (Date.now() - start) + " ms to execute 'createWallet.js'");
}


module.exports = {
    run: run
}