function run(message){
    var Block = require(`./../../blockchain/${message.content.substr(10)}.json`);
    message.channel.send("Block Nr. " + message.content.substr(10) + "\n```json\n" + JSON.stringify(Block, null, 4) + "```");
}

module.exports = {
    run: run
}