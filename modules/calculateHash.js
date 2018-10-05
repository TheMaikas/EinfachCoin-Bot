function run(toHash, difficulty) {
    const crypto = require("crypto");

    var difffactor;
    var difffactor2;

    var Hash;

    if(difficulty <= 1){
        difficulty = 1;
        difffactor = 5;
        diffactor2 = "0";
    }else if(difficulty >= 100){
        difffactor = 18;
        difffactor2 = "000";
    }else if(difficulty >= 90){
        difffactor = 2;
        difffactor2 = "00";
    }else if(difficulty >= 80){
        difffactor = 19;
        difffactor2 = "000";
    }
    while(!Hash.toString().substr(0, diffactor).includes(difffactor2)){
        Hash = crypto.createHmac('sha256', toHash.toString()).digest('hex');
    }
}

module.exports = {

}