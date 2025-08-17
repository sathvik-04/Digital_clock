const choices=["rock","paper","scissors"];
const playerdisplay= document.getElementById("playerdisplay");
const computerdisplay= document.getElementById("computerdisplay");
const resultdisplay= document.getElementById("resultdisplay");
const playerscoredisplay=document.getElementById("playerscoredisplay");
const computerscoredisplay=document.getElementById("computerscoredisplay");
let playerscore=0;
let computerscore=0;


function Playgame(playerChoice){
    const computerchoice= choices[Math.floor(Math.random()*3)];
    let result="";

    if(playerChoice===computerchoice){
    result = "IT'S A TIE";
    }else{
        switch(playerChoice){

            case "rock":
             result=   (computerchoice === "scissors")? "YOU WIN!":"YOU LOSE!";
              break;
            case "paper":
             result=   (computerchoice === "rock")? "YOU WIN!":"YOU LOSE!";
              break;
            case "scissors":
             result=   (computerchoice === "paper")? "YOU WIN!":"YOU LOSE!";
              break;

        }


    }
    playerdisplay.textContent=`PLAYER: ${playerChoice}`;
    computerdisplay.textContent=`COMPUTER: ${computerchoice}`;
    resultdisplay.textContent=result;


        resultdisplay.classList.remove("greentext","redtext");
    
    switch(result){

        case "YOU WIN!":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent=playerscore;
            break;

    case "YOU LOSE!":
    resultdisplay.classList.add("redtext");
    computerscore++;
    computerscoredisplay.textContent=computerscore;
    break;
    

 
    }

    }

