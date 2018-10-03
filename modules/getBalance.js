let start = Date.now();
function run(message){
    try{
       const userdata = require(`./../../saves/users/${message.author.id}.json`);

        return userdata.addresses[x].balance;
       
    }catch(err){
        return "Du hast noch keinen Account!";

    }
}
console.log("It took " + Date.now() - start + " ms to execute 'getBalance.js'");
module.exports = {
    run: run
}