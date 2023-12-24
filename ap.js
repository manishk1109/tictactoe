let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset-btn")
let newbtn = document.querySelector(".new-btn")
let msz = document.querySelector(".msz");
let pa = document.querySelector(".pa");

let playX = true;

const WinPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];

const disable = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enable = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msz.classList.add("hide");
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(playX) {
            box.innerText = "X";
            
            playX = false;
        }
        else {
            box.innerText = "O";
            playX = true;  
        }
        box.disabled = true;

        checkWinner();
    }); 
});

const showWinner = (winner) =>{
    pa.innerText = `Congratulation, ${winner} is winner`;
    msz.classList.remove("hide");
    disable();
}


const checkWinner = () =>{
    for (let pattern of WinPatterns){
        let posValue1 = boxes[pattern[0]].innerText;
        let posValue2 = boxes[pattern[1]].innerText;
        let posValue3 = boxes[pattern[2]].innerText;

        if(posValue1 !="" && posValue2 !="" && posValue3 !=""){
            if(posValue1 === posValue2 && posValue2 === posValue3){
                console.log("j");
               showWinner (posValue1); 
            }
        }
    }
};

newbtn.addEventListener("click", enable);
resetbtn.addEventListener("click", enable);
