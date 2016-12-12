// create the grid
// play the game
// create special functions as per requirement
// make sure all tests run
var gameStatus = 'not started';// not started, ongoing, over
var winStatus = 'noWinnerYet';// noWinnerYet, playerOne, playerTwo, draw
var whoIsPlayingNext = 'playerOne';
var gameGrid = [null, null, null, null, null, null, null, null, null];

function restart () {
	gameGrid = [null, null, null, null, null, null, null, null, null];
	gameStatus = 'not started';
}

function isGameOver () {
	if (gameStatus === 'over') {
		return true;
	} else {
		return false;
	}
}

function whoWon () {
	if (gameStatus === 'not started') {
		// winStatus = "noWinnerYet";
		return 0;
	}
	if (winStatus === 'playerOne') {
		return 1;
	}
	if (winStatus === 'playerTwo') {
		return 2;
	}
	if (winStatus === 'draw') {
		return 3;
	}
}

function playTurn (playerMoves) {
	if (whoIsPlayingNext === 'playerOne') {
		// console.log('triggerlvl1');
		if (gameGrid[playerMoves] === null) {
			// console.log('triggerlvl2');
			gameGrid[playerMoves] = 'playerOne';
			whoIsPlayingNext = 'playerTwo';
			return true;
		} else {
			return false;
		}

	} else {
		if (gameGrid[playerMoves] === null) {
			gameGrid[playerMoves] = 'playerTwo';
			whoIsPlayingNext = 'playerOne';
			return true;
		} else {
			return false;
		}
	}
}

//
//
//
//
//
//
//
//
//
//
