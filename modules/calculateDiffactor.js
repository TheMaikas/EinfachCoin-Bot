var diffactor;
var diffactor2;

function run(difficulty) {
    if (difficulty < 1) {
        difficulty = 1;
        diffactor = 5;
        diffactor2 = "0";
    } else if (difficulty >= 100) {
        diffactor = 18;
        diffactor2 = "000";
    } else if (difficulty >= 90) {
        diffactor = 2;
        diffactor2 = "00";
    } else if (difficulty >= 80) {
        diffactor = 19;
        diffactor2 = "000";
    } else if (difficulty >= 70) {
        diffactor = 20;
        diffactor2 = "000";
    } else if (difficulty >= 60) {
        diffactor = 22;
        diffactor2 = "000";
    } else if (difficulty >= 50) {
        diffactor = 26;
        diffactor2 = "000";
    } else if (difficulty >= 40) {
        diffactor = 3;
        diffactor2 = "00";
    } else if (difficulty >= 25) {
        diffactor = 4;
        diffactor2 = "00";
    } else if (difficulty >= 20) {
        diffactor = 5;
        diffactor2 = "00";
    } else if (difficulty >= 10) {
        diffactor = 10;
        diffactor2 = "00";
    } else if (difficulty >= 9) {
        diffactor = 11;
        diffactor2 = "00";
    } else if (difficulty >= 8) {
        diffactor = 12;
        diffactor2 = "00";
    } else if (difficulty >= 7) {
        diffactor = 14;
        diffactor2 = "00";
    } else if (difficulty >= 6) {
        diffactor = 18;
        diffactor2 = "00";
    } else if (difficulty >= 5) {
        diffactor = 23;
        diffactor2 = "00";
    } else if (difficulty >= 4) {
        diffactor = 30;
        diffactor2 = "00";
    } else if (difficulty >= 3) {
        diffactor = 47;
        diffactor2 = "00";
    } else if (difficulty >= 2) {
        diffactor = 5;
        diffactor2 = "0";
    } else if (difficulty >= 1) {
        diffactor = 64;
        diffactor2 = "0";
    }

    return [diffactor, diffactor2];
}

module.exports = {
    run: run
}