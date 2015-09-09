$(function () {

// Input name of players function
	function playerNameAge() {
		var player = [];
		console.log(player);
		var nameInput;
		var ageInput;
		// nameInput = prompt("What is the name of the player?");
		// ageInput = prompt("How old are you?");
		// console.log (nameInput);
		// console.log (ageInput);
		// player[0] = {name: "bob", age: 46}
		// // player[0] = {name: nameInput, age: ageInput};
		// console.log(player);
		// return player;
		for (var i = 0; i<2;i++) {
				nameInput = prompt("What is the name of the player " + (i+1) + "?");
				ageInput = prompt("How old are you?");
				player[i] = {name: nameInput, age: ageInput};
			}
		console.log(player);
		return player;
	};
	// 	var combatant = [];
	// 	console.log(combatant);
	// 	for (var i=0; i<2; i++) {
	// 		combatant[i] = {
	// 			name: prompt("What is the name of the player " + (i+1) + "?"),
	// 			age: prompt("How old are you?")
	// 		};
	// 	};
	// 	console.log(combatant);
	// 	return combatant;
	// 	// combatantName[0] = prompt("What is the name of the player " + (num+1) + "?");
	// 	// combatantName[1] = prompt("How old are you?");
	// 	// return combatantName;
	// };

	// function getNamesAges() {
	// 	var nameAge = [];
	// 		for (var i=0; i<2;i++) {
	// 			nameAge = playerNameAge(i);
	// 		};
	// 	return nameAge;
		
		// var opponentName = [];
		// var opponentAge = [];
		// for (var i = 0; i<2; i++) {		
		// 	opponentName[i] = playerName(i)[0];
		// 	opponentAge[i] = playerName(i)[1];
		// };
		// console.log(opponentName);
		// return opponentName;
	// };

	function turnOrder() {
		if (playerOneAge>playerTwoAge) {
			var turnOrder = 0;
			return turnOrder;
		} else if (playerTwoAge>playerOneAge) {
			var turnOrder = 1;
			return turnOrder;
		} else {
			var turnOrder = 0;
			return turnOrder;
		}
	}

	var players = [];
	players = playerNameAge();
	console.log(players);
	var playerOne = players[0];
	var playerTwo = players[1];
	var playerOneAge = parseInt(playerOne['age']);
	var playerTwoAge = parseInt(playerTwo['age']);
	var whoIsFirst = turnOrder();
	var temp;
	if (whoIsFirst === 1) {
		temp = playerOne;
		playerOne = playerTwo;
		playerTwo = temp;
	}
	var playerOneName = playerOne['name'];
	var playerTwoName = playerTwo['name'];
	playerOneAge = parseInt(playerOne['age']);
	playerTwoAge = parseInt(playerTwo['age']);
	
	console.log(playerOneName + "is " + playerOneAge + "years old, and " + playerTwoName + "is " + playerTwoAge + "years old.");

	$('#nameOrder').append("The order has been determined: " + playerOneName + " is first!");
































});