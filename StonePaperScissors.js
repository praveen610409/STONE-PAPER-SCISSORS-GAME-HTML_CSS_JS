let userScore = 0;
let compScore = 0;
let drawScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
const drawScorePara = document.querySelector("#draw-score")


const genCompChoice = () => {
    const options = ["stone" , "paper" , "scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game Was Draw.")
    msg.innerText = "Game Draw !"
    msg.style.backgroundColor = "#081b31";
    drawScore++;
    drawScorePara.innerText = drawScore;
}


const showWinner = (userWin) => {
    if ( userWin){
        console.log("You Win!")
        msg.innerText = "You Win !"
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        console.log("Computer Win !")
        msg.innerText = "Computer win !"
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}


const playGame = (userChoice) => {
    console.log("user Choice =", userChoice);   //user choice
    const CompChoice = genCompChoice();
    console.log("comp choice =", CompChoice);   //comp choice

    if (userChoice == CompChoice){
        drawGame();
    }
    else{
        let userWin= true;
        if ( userChoice === "Stone"){
            userWin = CompChoice === "paper" ? false : true;
        }else if ( userChoice === "paper"){
            userWin = CompChoice === "scissors" ? false : true;
        }else{
            userWin = CompChoice === "stone" ? false : true ;
        }
        showWinner(userWin);
        }
    };



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",  userChoice); user choice
        playGame(userChoice)
    });
});