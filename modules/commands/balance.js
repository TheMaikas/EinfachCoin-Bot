function run(message){
    let start = Date.now();

    if(message.mentions.users.array()[0] !== undefined){
        try{
            const userdata = require(`./../../saves/users/${message.mentions.users.array()[0].id}.json`);
            message.channel.send("Addresses from " + message.mentions.users.array()[0].id); 

            for(let x in userdata.addresses){
                message.channel.send(x + ": " + userdata.addresses[x].balance);
            }

        } catch (err) {
            message.channel.send("This user doesn't have a wallet yet!");
        }

    }else{

        try {

            const userdata = require(`./../../saves/users/${message.author.id}.json`);
            message.channel.send("Addresses from " + message.author.username); 
    
            for(let x in userdata.addresses){
                message.channel.send(x + ": " + userdata.addresses[x].balance);
            }
    
        } catch (err) {
            message.channel.send("You don't have a wallet yet!");
        }

    }

   
    
    console.log("It took " + (Date.now() - start) + " ms to execute 'balance.js'");
}



module.exports = {
    run: run
}