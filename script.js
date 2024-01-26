let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#newBtn");

let turnO = true;

let winingPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


const resetGame = ()=>{
  turnO = true;
  enabledBoxex();
  msgContainer.classList.add("hide");
}

const enabledBoxex = ()=>{
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = ""
  }
}
const disabledBoxex = ()=>{
  for (let box of boxes) {
    box.disabled = true;
  }
}

const showWinner = (winner)=>{
    msg.innerHTML = `Congratulations! Winner is <b><i>${winner}</i></b>`;
    msgContainer.classList.remove("hide");
    msgContainer.hidden = false;
    disabledBoxex();
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turnO){
      box.innerText = "O";
      turnO = false;
    }else{
      box.innerText = "X";
      turnO = true;
    }
    
    box.disabled = true;

    checkWinner();
    
  });
});

const checkWinner = ()=>{
  for (let pattern of winingPatterns) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if(val1 != "" && val2 != "" && val3 != ""){
      if(val1 == val2 && val2 == val3){
        showWinner(val1);
      }
    } 
  }
}


newBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);



