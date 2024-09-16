let turn = true; // true for Player 1 (X), false for Player 2 (O)

const myFUNCTION = (id) => {
    let temp2 = document.getElementById("player2");
    let temp3 = document.getElementById("player1");

    if (id.innerHTML === "") { // Check if the box is empty
        if (turn) {
            id.innerHTML = "X";
            temp3.style.visibility = "hidden";
            temp2.style.visibility = "visible";
        } else {
            id.innerHTML = "O";
            temp2.style.visibility = "hidden";
            temp3.style.visibility = "visible";
        }
        turn = !turn; // Toggle turn

        // Check for win or draw conditions
        if (checkWin()) {
            displayWinner((!turn ? "X" : "O") + " Wins!");
        } else if (isDraw()) {
            displayWinner("It's a Draw!");
        }
    }
}

const startgame = () => {
    // Reset the player display to make Player 1 visible
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    player1.style.visibility = "visible";
    player2.style.visibility = "hidden";

    // Reset the game board
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false; // Re-enable the buttons
    });

    // Reset the turn variable
    turn = true; // Player 1 starts the game

    // Hide the winner message
    let winnerMessage = document.getElementById("winner-message");
    winnerMessage.style.display = "none";
    winnerMessage.innerHTML = "";
}

const checkWin = () => {
    const winningConditions = [
        ['box1', 'box2', 'box3'], // Row 1
        ['box4', 'box5', 'box6'], // Row 2
        ['box7', 'box8', 'box9'], // Row 3
        ['box1', 'box4', 'box7'], // Column 1
        ['box2', 'box5', 'box8'], // Column 2
        ['box3', 'box6', 'box9'], // Column 3
        ['box1', 'box5', 'box9'], // Diagonal 1
        ['box3', 'box5', 'box7']  // Diagonal 2
    ];

    for (const condition of winningConditions) {
        const [a, b, c] = condition.map(cls => document.getElementsByClassName(cls)[0]);
        if (a.innerHTML && a.innerHTML === b.innerHTML && a.innerHTML === c.innerHTML) {          
            return true;
        }
    }
    return false;
}

const isDraw = () => {
    let boxes = document.querySelectorAll(".box");
    return [...boxes].every(box => box.innerHTML !== "");
}

const disablebtns = () => {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.disabled = true;
    });
}

const displayWinner = (message) => {
    let winnerMessage = document.getElementById("winner-message");
    winnerMessage.style.display = "block";
    winnerMessage.innerHTML = message;
    disablebtns();
}
