let start = Date.now();
function run(message){
    const crypto = require('crypto');

    var toHash1 = Math.floor(Math.random() * Math.floor(100000));
    var toHash = toHash1.toString();
    const hash = crypto.createHmac('sha256', toHash).digest('hex');

    var address = new Date() + '' + message.author.id; 

    address = "0xEFC" + crypto.createHmac('sha256', address).digest('hex');

    return address;
}

console.log("It took " + Date.now() - start + " ms to execute 'generateNewAddress.js'");

module.exports = {
    run: run
}