let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

let gameOver = false;


let choices = ["rock","paper","scissors"];

window.onload = function() {
    for(let i=0;i<3;i++)
    {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "./" + choices[i] + ".png";
        choice.addEventListener("click",selectChoice);
        document.getElementById("choices").append(choice);
    }

}

function selectChoice() {
    if(gameOver) {
        return ;
    }
    you = this.id;
    document.getElementById("your-choice").src = "./" + you + ".png";
    opponent = choices[Math.floor((Math.random())*3)];
    document.getElementById("opponent-choice").src = "./" + opponent + ".png";

    if(you==opponent)
    {
        yourScore+=1;
        opponentScore+=1;
    }
    else {
        if(you == "rock")
        {
            if(opponent =="scissors") {
                yourScore+=1;
            } else {
                opponentScore+=1;
            }
        }
        else if(you == "paper")
        {
            if(opponent =="scissors") {
                opponentScore+=1;
            } else {
                yourScore+=1;
            }
        }
        else 
        {
            if(opponent =="paper") {
                yourScore+=1;
            } else {
                opponentScore+=1;
            }
        }
    }
    if(yourScore==10 || opponentScore==10) {
        showResult();
    }
    else {
        document.getElementById("opponent-score").innerText = opponentScore;
        document.getElementById("your-score").innerText = yourScore;
    }
}

function showResult() {
    
    if(yourScore==10 && opponentScore==10)
    {
        document.getElementById("opponent-score").innerText = "Game Tied";
        document.getElementById("your-score").innerText = "Game Tied";  
    } else if(yourScore==10)
    {
        document.getElementById("opponent-score").innerText = opponentScore;
        document.getElementById("your-score").innerText = "YOU WON!!!";
    } else if(opponentScore==10)
    {
        document.getElementById("opponent-score").innerText = "OPPONENT WON :(";
        document.getElementById("your-score").innerText = yourScore;
    }
    gameOver = true;  
    let btn = document.createElement("button");
    btn.id = "btn";
    btn.innerHTML = "Restart";
    document.getElementById("restart").appendChild(btn);
    btn.addEventListener("click",restartGame);
}

function restartGame() {
    gameOver = false;
    yourScore = 0;
    opponentScore = 0;
    document.getElementById("btn").remove();
    document.getElementById("your-score").innerText = "0";
    document.getElementById("opponent-score").innerText = "0";
    you.innerHTML = "";
    opponent.innerHTML = "";
}