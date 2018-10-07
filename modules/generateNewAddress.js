
function run(message){
    let start = Date.now();
    const crypto = require('crypto');

    var address = new Date() + '' + message.author.id; 

    address = "0xEFC" + crypto.createHmac('sha256', address).digest('hex');

    return address;
    console.log("It took " +(Date.now() - start) + " ms to execute 'generateNewAddress.js'");
}



module.exports = {
    run: run
}