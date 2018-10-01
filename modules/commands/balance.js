function run(message){

    const main = require("./../../Bot.js");

    try{

        let balancefile = require(`./../saves/users/${message.author.id}`);
        message.channel.send(balancefile.balance)
    }catch(err){

        main.fs.writeFile(`./modules/saves/users/${message.author.id}.json`, '{ "balance": "10" }', function(err) {
            if(err) {
                return console.log(err);
            }
            message.channel.send(":white_check_mark: Account created!")
        });
    }
}

module.exports = {
    run: run
}