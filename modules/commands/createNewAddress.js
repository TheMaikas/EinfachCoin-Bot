function run(message) {
    let start = Date.now();
    const fs = require("fs");
    const gna = require('../generatenewaddress.js');
    const userdata = require(`./../../saves/users/${message.author.id}.json`);
    const addToAddressBook = require("../addtoaddressbook.js")

    var lastbalance;

    for (let x in userdata.addresses) {
        lastbalance = userdata.addresses[x].balance;
    }

    if (lastbalance == 0) {
        message.channel.send("Du brauchst keine neue Adresse! Auf deiner neusten Adresse sind noch keine Coins!")
        .then(msg => {
            msg.delete(60000);
        });
    } else {
        var newAddress = gna.run(message);
        userdata.addresses[newAddress] = {
            balance: 0,
            transactions: {}
        };
        addToAddressBook.run(message.author.id, newAddress);
        fs.writeFile(`./saves/users/${message.author.id}.json`, JSON.stringify(userdata, null, 4));
    }
    console.log("It took " + (Date.now() - start) + " ms to execute 'createnewaddress.js'");
}



module.exports = {
    run: run
}