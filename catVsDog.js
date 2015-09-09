$(function () {

// Input name of players function
	function playerName(num) {
		var combatantName = prompt("What is the name of the player " + (num+1) + "?");
		console.log(combatantName);
		return combatantName;
	};

	function getNames() {
		var opponentName = [];
		for (var i = 0; i<2; i++) {		
			opponentName[i] = playerName(i);
			console.log (opponentName);
		};
		console.log(opponentName);
		return opponentName;
	};

	var players = [];
	players = getNames();
	console.log(players);
	var playerOne = players[0];
	var playerTwo = players[1];
	console.log(playerOne + " " + playerTwo);






























});