function run(message){
    const crypto = require("crypto");

    var toHash1 = Math.floor(Math.random() * Math.floor(100000));
    var toHash = toHash1.toString() + message.author.id + new Date();
    const hash = crypto.createHmac('sha256', toHash).digest('hex');
    return hash;
}

module.exports = {
    run: run
}