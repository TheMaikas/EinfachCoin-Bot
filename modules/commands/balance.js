function run(message) {
    let start = Date.now();
    const fs = require('fs');

    if (message.mentions.users.array()[0] !== undefined) {
        try {
            var userdata = JSON.parse(fs.readFileSync(`./saves/users/${message.mentions.users.array()[0].id}.json`, 'utf-8'));
            var msg = "";
            msg = msg + "Adressen von " + message.mentions.users.array()[0].id;

            for (let x in userdata.addresses) {
                msg = msg + "\n" + x + ": " + (parseInt(userdata.addresses[x].balance) / 100);
            }

            message.channel.send(msg)
                .then(balancemsg => {
                    balancemsg.delete(60000);
                });

        } catch (err) {
            message.channel.send("Der Nutzer hat kein Wallet!")
                .then(msg => {
                    msg.delete(60000);
                });
        }

    } else {

        try {

            var userdata = JSON.parse(fs.readFileSync(`./saves/users/${message.author.id}.json`, 'utf-8'));
            var msg = "";
            msg = msg + "Adressen von " + message.author.username;

            for (let x in userdata.addresses) {
                msg = msg + "\n" + x + ": " + (parseInt(userdata.addresses[x].balance) / 100);
            }

            message.channel.send(msg)
            .then(balancemsg => {
                balancemsg.delete(60000);
            });

        } catch (err) {
            message.channel.send("Du besitzt noch kein Wallet!" + err)
                .then(msg => {
                    msg.delete(60000);
                });
        }

    }



    console.log("It took " + (Date.now() - start) + " ms to execute 'balance.js'");
}



module.exports = {
    run: run
}