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
// vv Game Functions vv

// Guess Counter Function
function guessCounter () {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

// guesses-so-far function
function lettersGuessed () {
    document.querySelector("#guessedLetters").innerHTML = "Your Guesses so Far: " + guessedLetters.join(" ");
}