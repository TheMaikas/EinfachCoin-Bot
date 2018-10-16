function run(){
    const crypto  = require("crypto");
    var latestBlockNumber = 1;
    var thisBlockNumber = parseInt(latestBlockNumber) + 1;
    var thisBlockNumber2 = thisBlockNumber.toString();
    var Hash = "x";
    var noncelol = 0;
    var date = Date.now();
    var date2 = date.toString();
    var previousHash = "0000000000000000000000000000000000000000000000000000000000000000";
    var transactions = {};
    var blockContent = {};

    while(!Hash.toString().substr(0, 30).includes("00")){
        noncelol = noncelol + 1;
        blockContent = {blocknumber: thisBlockNumber2, previousHash: "0000000000000000000000000000000000000000000000000000000000000000", nonce: noncelol, timestamp: date2, transactions: transactions};
        toHash = blockContent;
        Hash = crypto.createHmac('sha256', JSON.stringify(toHash).toString()).digest('hex');
    }

    nonces = nonces + blockContent.nonce;
    if(blockContent.nonce > maxnonce) maxnonce = blockContent.nonce;
}
var i = 0;
var nonces = 0;
var maxnonce = 0;

while(i < 100000){
    i++;
    run();
}

console.log(nonces / 100000);
console.log(maxnonce)
//diff
//1 = while(!Hash.toString().includes("0")){
//2 = while(!Hash.toString().substr(0, 5).includes("0")){
//3 = while(!Hash.toString().substr(0, 47).includes("00")){
//4 = while(!Hash.toString().substr(0, 30).includes("00")){
//5 = while(!Hash.toString().substr(0, 23).includes("00")){
//6 = while(!Hash.toString().substr(0, 18).includes("00")){
//7 = while(!Hash.toString().substr(0, 14).includes("00")){
//8 = while(!Hash.toString().substr(0, 12).includes("00")){
//9 = while(!Hash.toString().substr(0, 11).includes("00")){
//10 = while(!Hash.toString().substr(0, 10).includes("00")){
//20 = while(!Hash.toString().substr(0, 5).includes("00")){
//25 = while(!Hash.toString().substr(0, 4).includes("00")){
//40 = while(!Hash.toString().substr(0, 3).includes("00")){
//50 = while(!Hash.toString().substr(0, 26).includes("000")){
//60 = while(!Hash.toString().substr(0, 22).includes("000")){
//70 = while(!Hash.toString().substr(0, 20).includes("000")){
//80 = while(!Hash.toString().substr(0, 19).includes("000")){
//90 = while(!Hash.toString().substr(0, 2).includes("00")){
//100 = while(!Hash.toString().substr(0, 18).includes("000")){
//235 = while(!Hash.toString().substr(0, 10).includes("000")){
