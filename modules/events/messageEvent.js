let start = Date.now();
function run(message){
    const main = require("./../../Bot.js");

    if(message.author.id !== "169470476459048960") return;
    if(message.author.bot) return;
    if(message.content.indexOf(main.config.prefix) !== 0) return;

    const commandmsg = message.content.slice(main.config.prefix.length).trim().split(/ +/g);
    const command = commandmsg.shift().toLowerCase();

    try {
        let commandFile = require(`./../commands/${command}.js`);
        commandFile.run(message);
        console.log(`------------------------------------------------------------------------\nExecuted command ${command}`);
        message.delete(100);
    } catch (err) {
        console.error(err);
    }
}

console.log("It took " + (Date.now() - start) + " ms to execute 'messageEvent.js'");

module.exports = {
    run: run
}