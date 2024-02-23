var wins = 0;
var losses = 0;
var ties = 0;


var rounds = parseInt(prompt("How many rounds do you want to play?"));

for (let i = 0; i < rounds; i++) {
    var userChoice = prompt("Enter r, p, or s (for rock, paper, or scissors)");

    var computerChoice = Math.floor(Math.random() * 3);
    var computerMove;
    if(computerChoice === 0)
    {
        computerMove = "r";
    }
    else if (computerChoice === 1)
    {
        computerMove = "p";
    }
    else
    {
        computerMove = "s";
    }

    if (userChoice === computerMove) 
    {
        ties++;
        alert("It's a tie!");
    } else if (
        (userChoice === "r" && computerMove === "s") ||
        (userChoice === "p" && computerMove === "r") ||
        (userChoice === "s" && computerMove === "p")
    ) 
    {
        wins++;
        alert("You won!");
    } else 
    {
        losses++;
        alert("You lost!");
    }
}

alert("Game Over! You won " + wins + " times, tied " + ties + " times, and lost " + losses + " times.");
