function run(message, client) {
    if (message.content.toUpperCase().includes("NONCE")) {
        message.author.send({
            embed: {
                color: 2007070,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "EinfachCoin Hilfe",
                description: "Willkommen zu der <:EinfachCoin:437267554377924608> Hilfe!",
                fields: [{
                    name: "Was ist 'nonce'",
                    value: "Schreib einfach irgendwas nach dem '+mine' Befehl, du kannst zufällige Nummer, zufällige Buchstaben oder irgendwas anderes benutzen. Du kannst auch einfach deinen Kopf auf die Tastatur hauen.\nDann wird eine Schwierigkeitsberechnung gemacht und ein sogenannter Hashwert generiert der aus dem Inhalt des momentanen Blocks und deinem eingegebenen Wert besteht.\nWenn der Hash Wert dem momentanen Schwierigkeitsgrad entspricht, wird er in den Block geschrieben, der Block wird in die Blockchain gepackt und du wirst deine Mining Belohnung erhalten. Je niedriger die Schwierigkeit, um so einfacher ist es ein Wert zu finden der passt.\n\n:warning: Wenn du den selben Wert mehrmals hintereinander eingibst, wird nichts passieren, weil weder das Zeug im momentanen Block noch dein Wert sich ändert, weshalb der selbe Hashwert rauskommt.\n\nWie funktioniert die Schwierigkeit? - Nutze '+help difficulty'."
                }],
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© EinfachCoin"
                }
            }
        });
    } else if (message.content.includes("difficulty")) {
        message.author.send({
            embed: {
                color: 2007070,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "EinfachCoin Hilfe",
                description: "Willkommen zu der <:EinfachCoin:437267554377924608> Hilfe!",
                fields: [{
                    name: "Was ist 'difficulty'",
                    value: "Zum jetzigen Zeitpunkt soll ein Block alle 10 Minuten gefunden werden, wenn zu viele Blöcke gefunden werden, steigt die Schwierigkeit, wenn zu wenig Blöcke, sinkt die Schwierigkeit. Du kannst die momentane Schwierigkeit mit **'+difficulty'** aufrufen."
                }],
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© EinfachCoin"
                }
            }
        });
    } else {
        message.author.send({
            embed: {
                color: 2007070,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "EinfachCoin Hilfe",
                description: "Willkommen zu der <:EinfachCoin:437267554377924608> Hilfe!",
                fields: [{
                        name: "Was macht dieser Bot?",
                        value: "EinfachCoin ist ein DiscordBot, welcher wie eine Kryptowährung ist. Natürlich ist alles nicht dezentralisiert und läuft nicht auf unterschiedlichen Servern. Aber es gibt eine Blockchain, man kann Blöcke minen und natürlich kannst du auch \"EinfachCoins\" versenden. EinfachCoin wird kaum noch weiterentwickelt. Wenn du Wünsche oder Ideen hast, [poste sie in unserem Github Repository](https://github.com/EinfachAlex/EinfachCoin-Bot/issues)."
                    },
                    {
                        name: "Warum zur Hölle hast du den Bot erstellt?",
                        value: "Ich interesiere mich schon länger für Kryptowährungen und wollte wissen ob ich selber eine Blockchain programmieren kann. Am Ende kam dieser Bot raus."
                    },
                    {
                        name: "Can I use this 'Currency' to pay at my favourite Store?",
                        value: "I wish you could ;("
                    },
                    {
                        name: "__Befehle__",
                        value: "**+balance** - Zeig den Kontostand aller deiner Adressen.\n**+createNewAddress** - Erstellt dir eine neue Adresse\n**+createWallet** - Erstellt dein Wallet. Benutze diesen Befehl als erstes.\n**+getBlock <Nummer>** - Zeigt einen bestimmten Block\n**+mine <nonce>** - Versuche einen Block zu minen. *Weißt nicht was zur Hölle 'nonce' ist. Dann benutze den Befehl '+help nonce'"
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