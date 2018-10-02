function run(message){

    const main = require("./../../Bot.js");
    const createNewAddress = require("./../createNewAddress.js")

    try{
        let balancefile = require(`./../saves/users/${message.author.id}`);
        message.channel.send(balancefile.balance)
    }catch(err){


        var newAddress = createNewAddress.run(message);
        var file = "./modules/saves/users/" + message.author.id + ".json";

        //->> insert fucking json shit
        //{
        //  "address": {
        //      <newAddress>: {
        //          "balance": "0"
        //      },
        //      <newAddress>: {               Da sollen mehrere Addressen hinkönnen aber am Anfang natürlich nur eine.
        //          "balance": "0"
        //      }
        //  }
        //}

        main.fs.writeFile(file, JSON.stringify(data, null, 4));
    }
}

module.exports = {
    run: run
}