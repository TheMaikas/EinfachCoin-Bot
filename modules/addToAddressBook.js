function run(user, address) {
    const fs = require('fs');
    var book = JSON.parse(fs.readFileSync("./saves/addressbook.json"), 'utf-8');

    book[address] = {
        user
    }

    fs.writeFileSync("./saves/addressbook.json", JSON.stringify(book, null, 4));
}

module.exports = {
    run: run
}