//global variables
let userChoice;
let computerOptions;
let computerChoice;
let gameRun;
let runAgain;


do {

    userChoice = window.prompt("Let's play rock, paper, scissors. Input your choice.")

    // Computer works out choice
    computerOptions = ["rock", "paper", "scissors"];
    computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];


    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        window.alert("You must enter \"rock, paper or scissors\" ")
        gameRun = true

    } else if (userChoice === computerChoice) {
        window.alert("It was a tie, try again")
        gameRun = true;

    } else {
       validate(userChoice, computerChoice);
       runAgain = window.prompt("Play again y/n?")
       if (runAgain !== "y" && runAgain !== "n"){
           window.alert("You must enter \"y or n\"")
           gameRun = false;
       } else if (runAgain === 'y'){
           gameRun =true;
       } else {
           gameRun = false;
       }
    }

 } while (gameRun)


function validate (userChoice, computerChoice) {
    if (userChoice === "rock" && computerChoice === "scissors") {
        window.alert("Player wins with rock");
         return gameRun = false;

    } else if (userChoice === "scissors" && computerChoice === "paper") {
        window.alert("Player wins with scissors");
        return gameRun = false;

    } else if (userChoice === "paper" && computerChoice === "rock") {
        window.alert("Player wins with paper");
        return gameRun = false;

    } else {
        window.alert("Computer wins with " + computerChoice);
        return gameRun = false;
    }

}