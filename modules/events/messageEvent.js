function run(message){
    if(message.author.bot) return;

    if(message.content.indexOf(config.prefix) !== 0) return;

    const commandmsg = message.content.slice(config.prefix.length).trim().split(/ +/g);

    const command = commandmsg.shift().toLowerCase();

    try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run();
    } catch (err) {
    console.error(err);
    }
}

module.exports = {
    run: run
}