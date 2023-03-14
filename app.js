// Select input, submit btn, and other needed display elements //

const numberDisplay = document.getElementById('number-input');
const btn = document.getElementById('guess-btn');
const resultDisplay = document.getElementById('results');
const prevGuesses = document.getElementById('prev-guesses');
const guessesLeft = document.getElementById('guesses-left');
const startNewGame = document.getElementById('new-game');


// Set game-random number and 'guesses remaining' value

let numOfGuessesLeft = 10;
let number = Math.floor(Math.random() * 100) + 1;


// Add event listener to the submit btn //

btn.addEventListener('click', (e) =>{
	playGame();
})


// Add event listener for Enter button/key //

document.addEventListener('keydown', (e) =>{
	if (e.key === 'Enter') {
		playGame();
	}
})


// Add event listener for 'Start New Game' //

startNewGame.addEventListener('click', (e) =>{
	location.reload();
})

function playGame() {
		// If statement for when you Guess the number right // // also add various classlist and display values for selected items //

	if (numberDisplay.value == number) {
		numberDisplay.disabled = true
		resultDisplay.textContent = 'Correct! You guessed right!'
		resultDisplay.classList.add('results')
		startNewGame.textContent = 'Start New Game'
		startNewGame.classList.add('start-game')
	} 

		// If statement for when your guessed number is greater than game-random number //

	else if (numberDisplay.value > number ) {
		resultDisplay.textContent = 'Too High! Try again!'
		resultDisplay.classList.add('results')
		numOfGuessesLeft--;
		const newResult = document.createElement('span')
		newResult.textContent = ' ' + numberDisplay.value + ' ';
		prevGuesses.appendChild(newResult)
		guessesLeft.textContent = numOfGuessesLeft;
		numberDisplay.value = '';

		// If statement for when number of guesses is exhausted //

		if (numOfGuessesLeft < 0) {
			guessesLeft.textContent = 0;
			numberDisplay.disabled = true
			resultDisplay.textContent = 'Game Over! Number was ' + number;
			startNewGame.textContent = 'Start New Game'
			startNewGame.classList.add('start-game')
		}
	} 

		// If statement for when your guessed number is greater than game-random number //

	else if (numberDisplay.value < number) {
		resultDisplay.textContent = 'Too Low! Try again!'
		resultDisplay.classList.add('results')
		numOfGuessesLeft--;
		const newResult = document.createElement('span')
		newResult.textContent = ' ' + numberDisplay.value + ' ';
		prevGuesses.appendChild(newResult)
		guessesLeft.textContent = numOfGuessesLeft;
		numberDisplay.value = '';

		// If statement for when number of guesses is exhausted //

		if (numOfGuessesLeft < 0) {
			guessesLeft.textContent = 0;
			numberDisplay.disabled = true
			resultDisplay.textContent = 'Game Over! Number was ' + number;
			startNewGame.textContent = 'Start New Game'
			startNewGame.classList.add('start-game')
		}
	}
}