function run(message){
    var Block = require(`./../../blockchain/${message.content.substr(10)}.json`);
    message.channel.send("Block Nr. " + message.content.substr(10) + "\n```" + JSON.stringify(Block) + "```");
}

module.exports = {
    run: run
}