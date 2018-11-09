// Variables list:
var characters = ["gnadalf", "aragorn", "legolas", "frodo", "samwise", "peregrin", "meriadoc", "gimli", "boromir"]
var randomIndex = 0;
var userInput = "";
var wordUsed = "";
var wordArray = [];
var displayArray = [];
var alreadyUsed = [];
var remain = 5;
var wins = 0;
var losses = 0;
var audio = new Audio("");
var abc = [];
var alreadyUsedDisplay = document.getElementById("alreadyUsedDisplay");
var userInputDisplay = document.getElementById("displayUserInput");
var remainDisplay = document.getElementById("displayRemain");
var winsDisplay = document.getElementById("displayWins")
var lossesDisplay = document.getElementById("displayLosses")

// This function resets the page. In it variables are reset and a random character is chosen 
// from the characters array. The first for loop takes the randomly chosen word and pushes 
// letters into an array (wordUsed) and pushes "_" into the unsolved array that diplays on the page (displayArray). 
// The logic in the second for loop uses an array containing all letters in the alphabet 
// and splices out any letters contained in the character name to be gussed. the remaining 
// abc array contains only incorrect letters. The function will leave the (wordUsed) array only 
// containing correct letters to be guessed and the (abc) array only containing inccorect letters.
function reset() {
    randomIndex = Math.floor(Math.random() * (characters.length));
    userInput = "";
    wordUsed = characters[randomIndex];
    abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    wordArray = [];
    displayArray = [];
    remain = 5;
    remainDisplay.textContent = remain;
    if (wordUsed) {
        for (i = 0; i < wordUsed.length; i++) {
            wordArray.push(wordUsed.charAt(i));
            displayArray.push("_");
            userInputDisplay.textContent = displayArray.join("  ");
        }
        console.log("ANS:", wordUsed) //this will keep the answer on display in the console
    }
    for (i = 0; i < abc.length; i++) {
        if (wordArray.includes(abc[i])) {
            abc.splice(i, 1);
            i--;
            alreadyUsed = ["-"];
            alreadyUsedDisplay.textContent = alreadyUsed.join(", ");
            alreadyUsed = [];
        }
    }
}

//onkeyup function
document.onkeyup = function (event) {
    userInput = event.key.toLocaleLowerCase();
    // if guess is correct the loop cycles through the blank display array 
    // and places the correct letter in the character display array
    for (i = 0; i < wordArray.length; i++) {
        if (wordArray[i] === userInput) {
            displayArray[i] = userInput;
            userInputDisplay.textContent = displayArray.join("  ");
        }
    }
    // if there are no longer blank spaces in the display array the user wins, 
    // the page is reset and picture and audio files are triggered.
    if (displayArray.includes("_")) {
    } else {
        wins++;
        winsDisplay.textContent = wins;
        getImage();
        reset();
    }
    // if the guess is incorrect the letter will be left in the abc array from 
    // the reset function. The for loop below will splice the letter from the array so 
    // it cannot be guessed again, display the letter under "incorrect letters on the page
    // and the remaining guesses will be lowered by 1. 
    // The if statement below will trigger if the user is out of guesses, the page 
    // will reset and a loss will be added.
    if (abc.includes(userInput)) {
        alreadyUsed.push(userInput);
        for (i = 0; i < abc.length; i++) {
            if (userInput === abc[i]) {
                abc.splice(i, 1);
                i--;
                alreadyUsedDisplay.textContent = alreadyUsed.join(", ");
                remain--;
                remainDisplay.textContent = remain;
            }
        }
        if (remain === 0) {
            losses++;
            lossesDisplay.textContent = losses;
            reset();
        }
    }
}
// reset the page upon initial load
reset();

// This function will be called if the player wins, each if statement brings up a unique 
// image and audio file for the specific character. note that merry and pippin sounds are the same.
function getImage() {
    if (wordUsed === characters[0]) {
        document.getElementById("getImageDisplay").src = "assets/images/gandalf.png"
        audio = new Audio("assets/audio/gandalf_neverlate.wav");
        audio.play();
    }
    if (wordUsed === characters[1]) {
        document.getElementById("getImageDisplay").src = "assets/images/aragorn.jpg"
        audio = new Audio("assets/audio/aragorn_ridehard.wav");
        audio.play();
    }
    if (wordUsed === characters[2]) {
        document.getElementById("getImageDisplay").src = "assets/images/Legolas.png"
        audio = new Audio("assets/audio/legolas_near.wav");
        audio.play();
    }
    if (wordUsed === characters[3]) {
        document.getElementById("getImageDisplay").src = "assets/images/frodo.jpg"
        audio = new Audio("assets/audio/frodo.mp3");
        audio.play();
    }
    if (wordUsed === characters[4]) {
        document.getElementById("getImageDisplay").src = "assets/images/sam.png"
        audio = new Audio("assets/audio/journey.wav");
        audio.play();
    }
    if (wordUsed === characters[5]) {
        document.getElementById("getImageDisplay").src = "assets/images/pippin.jpeg"
        audio = new Audio("assets/audio/imhungry.wav");
        audio.play();
    }
    if (wordUsed === characters[6]) {
        document.getElementById("getImageDisplay").src = "assets/images/merry.jpg"
        audio = new Audio("assets/audio/imhungry.wav");
        audio.play();
    }
    if (wordUsed === characters[7]) {
        document.getElementById("getImageDisplay").src = "assets/images/Gimli.png"
        audio = new Audio("assets/audio/axe.wav");
        audio.play();
    }
    if (wordUsed === characters[8]) {
        document.getElementById("getImageDisplay").src = "assets/images/Boromir.jpg"
        audio = new Audio("assets/audio/boromir_evil.wav");
        audio.play();
    }
}

