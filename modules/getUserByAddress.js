function run(address) {
    console.log("HALLO!!!!")
    const fs = require('fs');
    var book = JSON.parse(fs.readFileSync("./saves/addressbook.json", 'utf-8'));

    return book[address].user;
}

module.exports = {
    run: run
}