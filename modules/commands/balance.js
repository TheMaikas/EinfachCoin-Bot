
function run(message){
    let start = Date.now();
    try {
        const userdata = require(`./../../saves/users/${message.author.id}.json`);
        message.channel.send("Addresses from " + message.author.username); 
        for(let x in userdata.addresses){
            message.channel.send(x + ": " + userdata.addresses[x].balance);
        }
    } catch (err) {
        message.channel.send("You haven't created an account yet!");
    }
    console.log("It took " + (Date.now() - start) + " ms to execute 'balance.js'");
}



module.exports = {
    run: run
}