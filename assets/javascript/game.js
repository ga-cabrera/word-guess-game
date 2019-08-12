// My Pseudo Code :
// Step 1: List of letters
// Step 2: Computer chooses random letter
// Step 3: Guess letter by pressing letter on keyboard
// Step 4: If letter is correct, you win, win score increments, game resets
// Step 5: If letter is incorrect, amount of guesses decreases by one. Repeat
// Step 6: If amount of guesses = 0, you lose, losses score increments by one, game resets

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
answer = function(alphabet) {
    return alphabet[Math.floor((Math.random() * alphabet.length))];
}
answer()

