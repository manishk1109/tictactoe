let turn = 'X';
let turnaudio = new Audio("ting.mp3");
let gameoveraudio = new Audio("gameover.mp3");
let gameover = false;
const changeTurn = () => {
    if (turn === 'X') {
        turn = '0';
    } else {
        turn = 'X';
    }

}


const checkWin = () => {
    let boxtext = document.querySelectorAll(".box");
    win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText == boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") && (boxtext[e[1]].innerText !== "") && (boxtext[e[2]].innerText !== "")) {
            document.querySelector('.result').innerText = boxtext[e[0]].innerText + " won"
            document.querySelector('.winnerMsz').style.display = "block"
            gameover = true;
            if(gameover){
                gameoveraudio.play();
            }

        }
    })

}

let reset = document.querySelector(".reset");
reset.addEventListener('click',()=>{
    let boxes = document.querySelectorAll(".box");
    Array.from(boxes).forEach(box =>{
        box.innerHTML = "";
    })
})

let start = document.querySelector(".playagain");
start.addEventListener('click',()=>{
    let boxes = document.querySelectorAll(".box");
    Array.from(boxes).forEach(box =>{
        box.innerHTML = "";
        document.querySelector('.winnerMsz').style.display = "none";
    })
})




let boxes = document.querySelectorAll(".box");
let count = 0
Array.from(boxes).forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerHTML === "" && !gameover) {
            box.innerHTML = turn;
            checkWin();
            changeTurn();
            turnaudio.play();
            count++
            
        }
    });
});