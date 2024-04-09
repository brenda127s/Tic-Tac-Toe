let restartBtn = document.getElementById("restart-btn");
let boxes = Array.from(document.getElementsByClassName("box"));
// let playerX = document.getElementById("x-player").value;
// let playerO = document.getElementById("o-player").value;
const playerX = "X";
    const playerO = "O";
    let currentPlayer = playerX;


let spaces = Array(9).fill(null);


    // if (playerX || playerO === "") {
    //     alert("Please enter name");
    // }

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));

}
function boxClicked(e) {
    
    const id = e.target.id

    if (!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        currentPlayer = currentPlayer == playerX ? playerO : playerX
    }  
}

function restartGame() {
    restartBtn.addEventListener('click', () => {
        spaces.fill(null)
        boxes.forEach(box => {
            box.innerText = "";
        })
    })
}

startGame();
