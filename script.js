let count = 0;
let turn = 'X';
let turnaudio = new Audio("ting.mp3");
let gameoveraudio = new Audio("gameover.mp3");
let gameover = false;
let scoreX = document.querySelector(".scoreX");
let score0 = document.querySelector(".score0");
let nextTurn = document.querySelector(".turnBox");

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
            document.querySelector('.result').innerText = boxtext[e[0]].innerText + " won";
            count = 0;
            if (boxtext[e[0]].innerText === "0") {
                score0.innerHTML = Number(score0.innerHTML) + 1;
            }
            if (boxtext[e[0]].innerText === "X") {
                scoreX.innerHTML = Number(scoreX.innerHTML) + 1;
            }
            setTimeout(() => {
                document.querySelector('.winnerMsz').style.display = "block";
                if (gameover) {
                    gameoveraudio.play();
                }
            }, 1000);
            gameover = true;


        }
    })

}



let reset = document.querySelector(".reset");
reset.addEventListener('click', () => {
    let boxes = document.querySelectorAll(".box");
    Array.from(boxes).forEach(box => {
        box.innerHTML = "";
        gameover = false;
        count = 0;
    })
})

let start = document.querySelector(".playagain");
start.addEventListener('click', () => {
    let boxes = document.querySelectorAll(".box");
    Array.from(boxes).forEach(box => {
        box.innerHTML = "";
        document.querySelector('.winnerMsz').style.display = "none";
        gameover = false;
        count = 0;
    })
})




let boxes = document.querySelectorAll(".box");

Array.from(boxes).forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerHTML === "" && !gameover) {
            box.innerHTML = turn;
            checkWin();
            changeTurn();
            nextTurn.innerHTML = 'Turn for ' + turn;
            turnaudio.play();
            console.log(count);
            count++
            if (count == 9 && !gameover) {
                nextTurn.innerHTML = "Its a tie";
                console.log(count);
                count = 0;
                setTimeout(() => {
                    let boxes = document.querySelectorAll(".box");
                    Array.from(boxes).forEach(box => {
                        box.innerHTML = "";
                        nextTurn.innerHTML = 'Turn for ' + turn;
                        count = 0;
                    })
                }, 1000)

            }

        }
    });
});