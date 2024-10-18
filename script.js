let turn = true;
const myFUNCTION = (id) => {
    temp3 = document.getElementById("player1");

    if (id.innerHTML === "") { 
        if (turn) {
            id.innerHTML = "X";
            temp3.innerHTML = "Player-O Turn";
        } else {
            id.innerHTML = "O";
            temp3.innerHTML = "Player-X Turn";
        }
        turn = !turn; // Toggle turn

        // Check for win or draw conditions
        if (checkWin()) {
            displayWinner((!turn ? "Congratulations! X" : "Congratulations! O") + " Wins!");
            hide();
        } else if (isDraw()) {
            displayWinner("It's a Draw!");
            hide();
        }
    }
}

const startgame = () => {
    let player1 = document.getElementById("player1");
    player1.innerHTML="";
    // Reset the game board
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false; // Re-enable the buttons
    });

    // Reset the turn variable
    turn = true;

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
function exit(){
    window.close();
}
function hide(){
    document.getElementById("player1").innerHTML="🥳🥳🥳";
}