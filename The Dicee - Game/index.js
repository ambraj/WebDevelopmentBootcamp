function rollDice() {

    var randomNumber1 = Math.floor(Math.random() * Math.floor(6)) + 1;
    console.log("random number = " + (randomNumber1 + 1));


    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

    var randomNumber2 = Math.floor(Math.random() * Math.floor(6)) + 1;
    console.log("random number = " + (randomNumber2 + 1));

    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    var winnerName = "";
    if (randomNumber1 > randomNumber2) {
        winnerName = "🚩Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        winnerName = "Player 2 Wins!🚩";
    } else {
        winnerName = "Draw!";
    }
    document.querySelector("h1").innerHTML = winnerName;
}

rollDice();
