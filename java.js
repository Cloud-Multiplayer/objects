var userChoice, randomNumber, computerChoice;
userChoice = prompt("heads or tails");
randomNumber = Math.round(Math.random());
if(randomNumber == 0)
{
    computerChoice = "heads";
}
else{
    computerChoice = "tails";
}
if(computerChoice == userChoice)
{
    alert("You guessed right! The coin flip landed on " + computerChoice);
}
else
{
    alert("Sorry, the coin flip landed on " + computerChoice);
}


var birthYear;
birthYear = prompt("What year were you born?");
var currentYear = 2024;
var age = currentYear - birthYear;

if (age > 21) {
    alert("You are old enough to drink in the US");
} else if (age === 21) {
    alert("You are old enough to drink in the US...barely");
} else {
    alert("Sorry, you are not old enough to drink in the US");
}
