let userScore=0;
let compScore=0;

const choice = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");


const gencompChoice =()=> {
    const options = ["rock","paper","scissor"];
    const ranIdx= Math.floor(Math.random() *3);
    return options[ranIdx];
};
const drawGame=() =>{
    console.log("game was draw.");
     msg.innerText= "draw play again";
     msg.style.backgroundColor = "white";
     msg.style.color = "black";
     

};

const showWinner= (userWin, userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win!");
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
      
    }else{
        compScore++;
        compScorepara.innerText=compScore;
     console.log("you lose!");
      msg.innerText= `you lose! ${compChoice} beats ${userChoice}`;
      msg.style.backgroundColor = "red";
      
    }
};


const playGame =(userChoice) => {
    console.log("user choice =", userChoice);

    const compChoice = gencompChoice();
    console.log("comp choice =", compChoice);
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
    let userWin = true;
    if(userChoice =="rock") {
        userWin=compChoice === "paper" ? false: true;
     }else if (userChoice =="paper") {
        userWin=compChoice === "scissor" ? false: true;
    }else{
        userWin=compChoice === "rock"? false: true;
        }
     showWinner (userWin,userChoice,compChoice);
    }

}
choice.forEach((choice) => {
choice.addEventListener("click",() =>{
   const userChoice=choice.getAttribute("id")
    console.log("choice was clicked",userChoice);
    playGame(userChoice);
});
});