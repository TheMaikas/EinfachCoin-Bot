function run(message){
    const getBalance = require("./../getBalance.js");
    try {
        const userdata = require(`./../../saves/users/${message.author.id}.json`);
        for(x in userdata.addresses){
            message.channel.send(userdata.addresses[x].balance);
        }
    } catch {
        message.channel.send("You haven't created an account yet!");
    }
}

module.exports = {
    run: run
}