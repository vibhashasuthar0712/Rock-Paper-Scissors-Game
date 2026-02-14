let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
   //rock,paper,scissors
   const randomIdx = Math.floor(Math.random()*3);
   return options [randomIdx];
}

const drawGame = ()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw.";   
    msg.style.backgroundColor="pink";
}

const showWinner=(userWin)=>{
   if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("you WIN!!");
    msg.innerText="you win!!"
    msg.style.backgroundColor="green";
   }else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("SORRY!!,you lose");
    msg.innerText="you lose!!" 
    msg.style.backgroundColor="red";
   }
}

const playGame = (userChoice)=>{
    console.log("user Choice=",userChoice);
    //generate computer choice

    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin = compChoice==="scissors"? false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

