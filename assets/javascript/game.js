// My Pseudo Code :
// Step 1: List of words
// Step 2: Pick a word
// Step 3: Create spaces for letters of words (underscores)
// Step 4: Player picks letter/ guesses word
// Step 5: Determine whether letter/guess is true or false
//  * If true, empty space will be filled with correct letter
//  * If false, incorrect letter will be added to "wrong letter" pile
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

// Picking Random letter from alphabet
var letter = alphabet[Math.floor(Math.random() * alphabet.length)];

// Answer Array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}