# Lord of the Rings Hangman

### How the Game Works

This page contains a simple guess the LOTR character hangman game done in vanilla javascript. When the page loads a fill-in-the-blanks word is displayed and the user hits any key to fill the blanks or add to incorrect guesses list. Any key hit once will not be counted if hit again. The game will complete when guesses remaining reaches zero, or the word is guessed correctly. After completion the page will automatically load the next word. If completed correctly an image and sound clip will trigger corresponding to the character name guessed. Wins and losses are kept track and displayed on page. If you want to cheat inspect the page and the current correct answer will be logged in the console.

### How the Page is Structured 

The layout is simple for the user with no scrolling if fullscreen and styling done using bootstrap. All user interaction is done using the keyboard. A link to the github repository is included in the footer.

### How the Script Works

1. The page works using only vanilla javascript and no javascript libraries. It utilizes basic functions, if/else statements, and for loops with variables using numbers, strings and arrays.

2. A reset function resets the character to be guessed, guesses remaining count, and word to be guessed on page load and win/loss event.

3. An onkeyup function is used to take user input and test if the key pressed is part of the word.