// My Pseudo Code :
// Step 1: List of letters
// Step 2: Computer chooses random letter
// Step 3: Guess letter by pressing letter on keyboard
// Step 4: If letter is correct, you win, win score increments, game resets
// Step 5: If letter is incorrect, amount of guesses decreases by one. Repeat
// Step 6: If amount of guesses = 0, you lose, losses score increments by one, game resets

// My starting variables
var win = 0;
var lose = 0;
var guessesLeft = 10;
// empty array for guessed letters so far in the game
var guessedLetters = [] 

// List of Letters
var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
//  Computer chooses random letter
var computerAnswer = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log("Computer knows you're cheating... The answer is " + "'" + computerAnswer + "'");

// vv Game Functions vv

// Guess Counter Function
var guessCounter = function(){
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};
// without this, guess counter will be empty when you begin the game (until you press any button)
guessCounter();

// guesses-so-far function
function lettersGuessed () {
    document.getElementById("lettersGuessed").innerHTML = "Your Guesses So Far: " + guessedLetters.join(", ");
};

// reset function (when you win or lose a game)
function reset() {
    guessesLeft = 11;
    guessedLetters = [];
    var computerAnswer = alphabet[Math.floor(Math.random()*alphabet.length)];
};

document.onkeyup = function(event) {
    guessesLeft--;

    var yourGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(yourGuess);
    guessCounter();
    lettersGuessed();
    
    if (yourGuess === computerAnswer) {
        win++;
        document.querySelector("#win").innerHTML = "Wins: " + win;
        reset();
    }
    else if (guessesLeft === 0) {
        lose++;
        document.getElementById("lose").innerHTML = "Losses: " + lose;
        reset ();
    }
};