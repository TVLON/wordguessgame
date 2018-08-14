alert("Press any key to get started!")
// array of rappers
var rapper = '';
var rappers = ["juicewrld", "asaprocky", "xxxtentation", "smokepurpp", "offset"]
var rightLetter = [];
var wrongLetter = [];
var underScore = [];
var wins = 0;
var loss = 0;
var userGuess = 10;
var guessedLetters = [];

function resetGame(){
	rapper = '';
	rightLetter = [];
	wrongLetter = [];
	underScore = [];
	wins = 0;
	loss = 0;
	userGuess = 10;
	guessedLetters = []
	rapper = rappers[Math.floor(Math.random() * (rappers.length - 1)) + 0];
	for(var i = 0; i < rapper.length; i++){
		underScore.push('_');
	}
	updateView();
}

function startGame(){
	rapper = rappers[Math.floor(Math.random() * (rappers.length - 1)) + 0];
}

startGame()
console.log(rapper)
for(var i = 0; i < rapper.length; i++){
	underScore.push('_');
}

wrongLetter = [];
guessesLeft = 10;

updateView();

document.onkeyup = function(event){
	guessedLetters.push(event.key)
	var userGuess = event.key;
	console.log(userGuess);
	if(rapper.indexOf(userGuess) > -1){
		for(var i = 0; i < rapper.length; i++){
			if(rapper[i] === userGuess){
				underScore[i] = userGuess;
				console.log(underScore);
		
			}
		}
	}
	else{
		wrongLetter.push(userGuess);
		guessesLeft--;
		console.log(guessesLeft);
	}
	updateView();
	checkIfPlayerWon()
}

function checkIfPlayerWon(){
	if(underScore.indexOf('_') === -1){
		alert("You won!");
		wins++;
		resetGame();
	}
	if(guessesLeft < 1){
		alert("You lost");
		loss++;
		resetGame();
	}
}

function updateView(){
	document.getElementById('guesses-left').textContent = guessesLeft;

	document.getElementById('underScore').textContent = underScore;
}