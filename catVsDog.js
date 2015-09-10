$(function () {

// Input name of players function
	function playerNameAge() {
		var player = [];
		// console.log(player);
		var nameInput1 = $('#name0').val();
		var ageInput1 = $('#age0').val();
		var nameInput2 = $('#name1').val();
		var ageInput2 = $('#age1').val();
		// var formName = "";
		// var formAge = "";
		player[0] = {name: nameInput1, age: ageInput1};
		player[1] = {name: nameInput2, age: ageInput2};
		// console.log(player);
		// alert("what?");
		// for (var i=0;i<2;i++) {
		// 	formName = "'#name" + i + "'";
		// 	formAge = "'#age" + i + "'";
		// 	consle.log (formName + " " + formAge);
		// 	alert("wtf?");
		// 	nameInput = $(formName).val();
		// 	ageInput = $(formAge).val();
		// 	console.log(nameInput + " " + ageInput);
		// 	alert("please work");
		// 	player[i] = {name: nameInput, age: ageInput};
		// }
	// console.log(player);
	return player;
	};
		// // nameInput = prompt("What is the name of the player?");
		// // ageInput = prompt("How old are you?");
		// // console.log (nameInput);
		// // console.log (ageInput);
		// // player[0] = {name: "bob", age: 46}
		// // // player[0] = {name: nameInput, age: ageInput};
		// // console.log(player);
		// // return player;
		// for (var i = 0; i<2;i++) {
		// 	counter = i+1;
		// 	formName = "Player " + counter;
		// 	$('#nameAgeInput').append("<form>" + formName + ":<br><input id='nameForm' type='text' name='playerName'><br></form>");
		// 	$('form').append("Age:<br><input id='ageForm' type='number' name='playerAge'><br>");

				// nameInput = prompt("What is the name of the player " + (i+1) + "?");
				// ageInput = prompt("How old are you?");
	// 			player[i] = {name: nameInput, age: ageInput};
	// 		}
	// 	console.log(player);
	// 	return player;
	// };
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

	function turnOrder(num1,num2) {
		// console.log (playerOneAge);
		// console.log(playerOne['name']);
		// alert("ok");
		if (num1>num2) {
			var turn = 0;
			return turn;
		} else if (num2>num1) {
			var turn = 1;
			return turn;
		} else {
			var turn = 0;
			return turn;
		}
	};

	function sideSelect () {
		$("#sideSelection").append(playerOneName + " please select your avatar type: ");
		alert("ok");
		// $("#sideSelection").append("<select id='avatarSelect'><option value='Cat'>Cat</option><option value='Dog'>Dog</option></select>");
		// var catDog = $("#avatarSelect").val();
		// return catDog;
	};

	var players = [];
	$("button").on("click", function() {
		players = playerNameAge();
		console.log(players);
		// alert("ok");
	// 	idName = playerNameAge();
	// 	alert(idName);
	// });
		var playerOne = players[0];
		var playerTwo = players[1];
		var playerOneAge = parseInt(playerOne['age']);
		// console.log(typeof playerOneAge);
		var playerTwoAge = parseInt(playerTwo['age']);
		// console.log(playerOne['name'] + playerTwo['name'] + playerOneAge + playerTwoAge);
		// alert("ok");
		var whoIsFirst = 0;
		console.log(playerOneAge);
		console.log(playerTwoAge);
		console.log(typeof playerOneAge);
		console.log(typeof playerTwoAge);
		num1 = playerOneAge;
		num2 =	playerTwoAge;
		whoIsFirst = turnOrder(num1,num2);
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
		$('#playerSelection').append("<h2>Welcome combatants. Now that you have named your avatars. It is time to determine who goes first: age before beauty of course!</h2>");
		$('h2').append("The order has been determined: " + playerOneName + " is first!");
		playerOne['avatar'] = sideSelect();
		console.log(playerOne);
		alert("ok");
		if (playerOne['avatar'] === 'Cat') {
			playerTwo['avatar'] = 'Dog';
			} else {
				playerTwo['avatar'] = 'Cat';
			}
		$('#sideSelection').append(playerOneName + "is the " + playerOne['avatar'] + " and " + playerTwoName + " is the " + playerTwo['avatar']);
		alert("ok");
	});
});

	


























// });