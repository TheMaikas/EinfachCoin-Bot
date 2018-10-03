

function run(message){
    let start = Date.now();
    try{
        require(`./../../saves/users/${message.author.id}.json`);
        message.channel.send("Already have an account? WTF?");
    }catch(err){
        const fs = require("fs");
        const gna = require("./../generateNewAddress.js");
        var newAddress = gna.run(message);
        
        var data = {};
        data['addresses'] = {}
        data.addresses[newAddress] = {balance: 0}

        fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(data, null, 4));
        message.channel.send("Account created!")
    }
    console.log("It took " + (Date.now() - start) + " ms to execute 'createAccount.js'");

}


module.exports = {
    run: run
}