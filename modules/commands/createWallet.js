function run(message) {

    let start = Date.now();



    try {

        require(`./../../saves/users/${message.author.id}.json`);
        message.channel.send("You already have a wallet? WTF?")
        .then(msg => {
            msg.delete(60000);
        });

    } catch (err) {

        const fs = require("fs");
        const gna = require("../generatenewaddress.js");
        const addToAddressBook = require("../addtoaddressbook.js");
        var newAddress = gna.run(message);

        var data = {};
        data['addresses'] = {};
        data.addresses[newAddress] = {
            balance: 0
        }
        data.addresses[newAddress]['transactions'] = {};

        addToAddressBook.run(message.author.id, newAddress);

        fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(data, null, 4));
        message.channel.send("Wallet created!")
        .then(msg => {
            msg.delete(60000);
        });
        console.log("It took " + (Date.now() - start) + " ms to execute 'createwallet.js'");
    }
}


module.exports = {
    run: run
}