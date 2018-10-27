function run(message) {
    let start = Date.now();
    if (message.content.length < 7) return message.reply("Wie wäre es mit Nonce angeben?");
    const crypto = require("crypto");
    const fs = require("fs");
    const calculateDifficulty = require("../calculatedifficulty.js");
    const calculateDiffactor = require("../calculatediffactor.js");
    const getMinerReward = require("../getminerreward.js");
    const generateNewTxID = require("../generatenewtxid.js");
    const getUserByAddress = require("../getuserbyaddress.js");

    try {
        var minerWallet = require(`./../../saves/users/${message.author.id}.json`);
    } catch (err) {
        message.channel.send("You don't have a wallet yet. Create one with '+createWallet'")
        .then(msg => {
            msg.delete(60000);
        });
        return;
    }

    var blckch = fs.readFileSync("./blockchain/blockchain.json", 'utf-8');
    var blockchain = JSON.parse(blckch);

    var latestBlockNumber = blockchain.lastBlockNumber;
    var latestBlock = require(`./../../blockchain/${latestBlockNumber}.json`);

    var pool = JSON.parse(fs.readFileSync("./saves/pool.json"));

    var thisBlockNumber = parseInt(latestBlockNumber) + 1;
    var thisBlockNumber2 = thisBlockNumber.toString();

    var date = Math.floor(Date.now() / 1000);
    var date2 = date.toString();

    var nonce = message.content.substr(6);
    var noncevalue = nonce.toString();

    var previousHash = latestBlock.hash;

    var difficultyvalue = calculateDifficulty.run(message, nonce)[0];

    var diffactors = calculateDiffactor.run(difficultyvalue);
    var diffactor = diffactors[0];
    var diffactor2 = diffactors[1];

    var transactions = {};

    var highestfee = 0;

    var fees = [];
    for (x in pool.fee) {
        fees.push(x);
    }
    fees.sort(sortNumber);

    var bytes = 0;
    var totalFee = 0;
    for (x in fees) {
        for (y in pool.fee[fees[x]]) {
            if (bytes < 1000) {
                var TxID = y;
                var Tx = pool.fee[fees[x]][y];
                transactions[y] = pool.fee[fees[x]][y];

                bytes = bytes + parseInt(JSON.stringify(Tx).length);
                totalFee = totalFee + parseInt(pool.fee[fees[x]][y].fee);
                console.log(bytes + " " + totalFee);
            }
        }
    }

    var toHash = {
        blocknumber: thisBlockNumber2,
        previousHash: latestBlock.hash,
        difficulty: difficultyvalue.toString(),
        nonce: noncevalue,
        bytes: bytes,
        transactions: transactions
    };

    var Hash = crypto.createHmac('sha256', JSON.stringify(toHash).toString()).digest('hex');

    if (Hash.toString().substr(0, diffactor).includes(diffactor2)) {
        var i = 0;
        var minerAddress;
        for (x in minerWallet.addresses) {
            if (i < 1) {
                minerAddress = x;
            }
            i = i + 1;
        }

        var newCoinsTxID = generateNewTxID.run(message);
        transactions[newCoinsTxID] = {
            from: "0xEFC0000000000000000000000000000000000000000000000000000000000000000",
            to: minerAddress,
            amount: (10 + totalFee),
            fee: 0,
            timestamp: (Math.floor(Date.now() / 1000)).toString()
        };
        var data = {
            blocknumber: thisBlockNumber2,
            previousHash: latestBlock.hash,
            difficulty: difficultyvalue.toString(),
            nonce: noncevalue,
            bytes: bytes,
            transactions: transactions,
            timestamp: date2,
            hash: Hash
        };
        var data2 = {
            lastBlockNumber: thisBlockNumber2
        };

        fs.writeFile(`./blockchain/${thisBlockNumber}.json`, JSON.stringify(data, null, 4));
        fs.writeFile(`./blockchain/blockchain.json`, JSON.stringify(data2, null, 4));
        message.channel.send("Block mined!");

        for (x in transactions) {
            if (transactions[x].fee > 0) {
                delete pool.fee[transactions[x].fee][x];
            }
            console.log(typeof minerAddress)
            var receiveruser = getUserByAddress.run(transactions[x].to);
            console.log(receiveruser);
            var receiver = JSON.parse(fs.readFileSync(`./saves/users/${receiveruser}.json`, 'utf-8'));
            receiver.addresses[transactions[x].to].balance = parseInt(receiver.addresses[transactions[x].to].balance) + parseInt(transactions[x].amount);
            receiver.addresses[transactions[x].to].transactions[x] = {
                from: transactions[x].from,
                amount: transactions[x].amount,
                timestamp: transactions[x].timestamp
            }
            fs.writeFileSync(`./saves/users/${receiveruser}.json`, JSON.stringify(receiver, null, 4));

            fs.writeFileSync("./saves/pool.json", JSON.stringify(pool, null, 4));

        }
    } else {
        message.channel.send("Nope! Unfortunately that didn't work. Try something else instead! (Difficulty: " + difficultyvalue + ")")
            .then(msg => {
                msg.delete(10000);
            });
    }

    console.log("It took " + (Date.now() - start) + " ms to execute 'mine.js'");
}

function sortNumber(a, b) {
    return b - a;
}

module.exports = {
    run: run
}