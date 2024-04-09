let restartBtn = document.getElementById("restart-btn");
let boxes = Array.from(document.getElementsByClassName("box"));
let playerX = document.getElementById("x-player");
let playerO = document.getElementById("o-player");
let spaces = Array(9).fill(null);

    if (playerX && playerO) {
        startGame();
    } else {
        alert("Please enter name");
    }

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));

}
function boxClicked(e) {
    console.log(e.target)
}

startGame();
