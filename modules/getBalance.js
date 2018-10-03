function run(message){
    try{
       const userdata = require(`./../../saves/users/${message.author.id}.json`);

        return userdata.addresses[x].balance;
       
    }catch(err){
        return "Du hast noch keinen Account!";

    }
}
module.exports = {
    run: run
}