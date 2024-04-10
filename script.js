let restartBtn = document.getElementById("restart-btn");
let boxes = Array.from(document.getElementsByClassName("box"));
const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;


const playerWinner = document.createElement("h2");

let spaces = Array(9).fill(null);


const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));

}
function boxClicked(e) {
    
    const id = e.target.id

    if (!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if (playerHasWon() !==false) {
            playerWinner.innerHTML = `${currentPlayer} has won!`
            playerWinner.classList.add("winner");

            const parent = document.querySelector(".container");
            parent.appendChild(playerWinner);

        }

        currentPlayer = currentPlayer == playerX ? playerO : playerX
    }  
restartGame();
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition
        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a, b, c]
        }
    }
    return false
}

function restartGame() {
    restartBtn.addEventListener('click', () => {
        spaces.fill(null)
        boxes.forEach( box => {
            box.innerText = "";
        })
        currentPlayer = playerX;
        playerWinner.remove();
    })
}
startGame();