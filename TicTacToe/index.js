// Getting all HTML objects I need
const squaresCollection = document.querySelectorAll(".square");
const squares = Array.from(squaresCollection);
let gameArray = [];
let turnText = document.getElementById("turnText");
let resetButton = document.getElementById("resetButton");

let turn = "x";
let winner;

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => play(i), {once: true});
}

function play(index) {
    if (turn == "x") {
        // Set value clicked
        gameArray[index] = "x";
        squares[index].innerHTML = "&#10060;";

        // Change turn
        turn = "o";
        turnText.innerHTML = "&#11093;'s turn";  
        turnText.setAttribute("color", "blue");
    } else {
        // Set value clicked
        gameArray[index] = "o";
        squares[index].innerHTML = "&#11093;";

        // Change turn
        turn = "x";
        turnText.innerHTML = "&#10060;'s turn";
        //turnText.setAttribute("color", "blue");
    }

    // Check for winners (this code is hilarious)
    if (winner == undefined) {
        if (gameArray[0] == gameArray[1] && gameArray[1] == gameArray[2] && gameArray[0] != undefined) winner = gameArray[0];
        else if (gameArray[3] == gameArray[4] && gameArray[4] == gameArray[5] && gameArray[3] != undefined) winner = gameArray[3];
        else if (gameArray[6] == gameArray[7] && gameArray[7] == gameArray[8] && gameArray[6] != undefined) winner = gameArray[6];
        else if (gameArray[0] == gameArray[3] && gameArray[3] == gameArray[6] && gameArray[0] != undefined) winner = gameArray[0];
        else if (gameArray[1] == gameArray[4] && gameArray[4] == gameArray[7] && gameArray[1] != undefined) winner = gameArray[1];
        else if (gameArray[2] == gameArray[5] && gameArray[5] == gameArray[8] && gameArray[2] != undefined) winner = gameArray[2];
        else if (gameArray[0] == gameArray[4] && gameArray[4] == gameArray[8] && gameArray[0] != undefined) winner = gameArray[0];
        else if (gameArray[2] == gameArray[4] && gameArray[4] == gameArray[6] && gameArray[2] != undefined) winner = gameArray[2];
    } 
    if (winner != undefined) {
        console.log(winner)
        turnText.innerHTML = (winner == "x" ? "&#10060; wins!" : "&#11093 wins!");
    }
}