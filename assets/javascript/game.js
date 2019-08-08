// My Pseudo Code :
// Step 1: List of words
// Step 2: Pick a word
// Step 3: Create spaces for letters of words (underscores)
// Step 4: Player picks letter/ guesses word
// Step 5: Determine whether letter/guess is true or false
//  * If true, empty space will be filled with correct letter
//  * If false, incorrect letter will be added to "wrong letter" pile
var wordList = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"
];

var word = wordlist[Math.floor(Math.random() * wordlist.length)];