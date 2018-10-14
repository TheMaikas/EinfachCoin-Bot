function run(message, client){
    if(message.content.toUpperCase().includes("NONCE")){
        message.author.send({embed: {
            color: 2007070,
            author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
            },
            title: "EinfachCoin Help",
            description: "Welcome to the <:EinfachCoin:437267554377924608> Help!",
            fields: [{
                name: "What is 'nonce'",
                value: "Just type anything after the '+mine' command, you can use random numbers, random letters or just anything else. You can even just hit your head on the keyboard.\nThen a difficult calculation is performed and a so-called hash value is calculated from the current content of the block and your entered value.\nIf this hash value meets the current difficulty level, it will be written into the block, the block will be appended to the blockchain and you will receive your Miner reward. The lower the difficulty, the easier it is to find a value that fits.\n\n:warning: If you enter the same value several times in a row, nothing will change, because neither the block content nor your value will change, the same hash as before will come out.\n\nHow does the difficulty work? - Use '+help difficulty'."
            }],
            footer: {
            icon_url: client.user.avatarURL,
            text: "© EinfachCoin"
            }
        }
        });
    }else if(message.content.includes("difficulty")){
        message.author.send({embed: {
            color: 2007070,
            author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
            },
            title: "EinfachCoin Help",
            description: "Welcome to the <:EinfachCoin:437267554377924608> Help!",
            fields: [{
                name: "What is 'difficulty'",
                value: "At the moment a new block should be found every 10 minutes, if too many blocks are found, the difficulty increases, if too few blocks, the difficulty decreases. You can display the current difficulty with **'+difficulty'**."
            }],
            footer: {
            icon_url: client.user.avatarURL,
            text: "© EinfachCoin"
            }
        }
        });
    }else{
        message.author.send({embed: {
            color: 2007070,
            author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
            },
            title: "EinfachCoin Help",
            description: "Welcome to the <:EinfachCoin:437267554377924608> Help!",
            fields: [{
                name: "What does this Bot do?",
                value: "EinfachCoin is a DiscordBot, which is a kind of crypto currency. Of course the whole thing is not decentralized and does not run on different servers. But there is a blockchain, you can mine blocks and of course you can also send \"EinfachCoins\". EinfachCoin is constantly being further developed. If you have wishes or ideas, just [post them in our Github Repository](https://github.com/EinfachAlex/EinfachCoin-Bot/issues)."
            },
            {
                name: "Why the hell did you create this Bot?",
                value: "I have been interested in crypto currencies for a long time and wanted to see if I could program a blockchain by myself. In the end this bot came out."
            },
            {
                name: "Can I use this 'Currency' to pay at my favourite Store?",
                value: "I wish you could ;("
            },
            {
                name: "__Commands__",
                value: "**+balance** - Shows your balances for every of your addresses.\n**+createNewAddress** - Generates you a new Address\n**+createWallet** - Creates your Wallet. Use this command first.\n**+getBlock <Number>** - Shows you a specific Block\n**+mine <nonce>** - Try to mine a block. *Don't know what the hell 'nonce' is. Then use command '+help nonce'"
            },
            ],
            footer: {
            icon_url: client.user.avatarURL,
            text: "© EinfachCoin"
            }
        }
        });
    }
}

module.exports = {
    run: run
}
