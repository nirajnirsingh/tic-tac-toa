let boxes = document.querySelectorAll(".box");


let turn = true;


const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let board_Array = new Array(9).fill("E");
//  0  1  2  3  4  5  6  7  8  
// [E, E, E, E, E, E, E, E ,E]

let total_turn = 0;

function checkWinner() {

  for (let [index0, index1, index2] of winPatterns) {
    if (board_Array[index0] !== "E" && board_Array[index0] === board_Array[index1] && board_Array[index1] === board_Array[index2]) {
      return 1;
    }
  }
}

let printer = (event) => {

  const element = event.target;
  
  if (board_Array[element.id] === "E") {
      total_turn++;
    if (turn === true) {
      element.innerText = "O";
      board_Array[element.id] = "O";

      if (checkWinner()) {
        document.querySelector(".winnerMessage").innerHTML = "winner is O";
        btn.removeEventListener("click", printer);
        return;
      };

      turn = false;
      
    }
    else {
      element.innerHTML = "X";
      board_Array[element.id] = "X";

      if (checkWinner()) {
        document.querySelector(".winnerMessage").innerHTML = "winner is X";
        btn.removeEventListener("click", printer);
        return;
      };

      turn = true; 
    }
    if(total_turn == 9){
     document.querySelector(".winnerMessage").innerHTML = "MATCH DRAW";
      btn.removeEventListener("click", printer);
   }
  }
};

const btn = document.querySelector(".game");

btn.addEventListener("click", printer);

let resetbtn = document.querySelector(".resetbtn");

resetbtn.addEventListener("click", ()=>{
   const cell = document.querySelectorAll(".box");

   let cell_array = Array.from(cell);
   cell_array.forEach((value)=>{
    value.innerHTML = "";
   })
    turn = true;
    total_turn = 0;
   board_Array = new Array(9).fill("E");
   btn.addEventListener("click", printer);
   document.querySelector(".winnerMessage").innerHTML = "";
   
})




