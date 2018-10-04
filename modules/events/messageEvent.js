function run(message){
    const config = require("./../../config.json");

    if(message.author.id !== "169470476459048960") return;
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;

    const commandmsg = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = commandmsg.shift().toLowerCase();

    try {
        let commandFile = require(`./../commands/${command}.js`);
        console.log(`------------------------------------------------------------------------\nExecuting command ${command}`);
        commandFile.run(message);

        message.delete(100);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    run: run
}