$(function () {
var name1 = localStorage.getItem("firstPlayer");
var name2 = localStorage.getItem("secondPlayer");
var side1 = localStorage.getItem("firstSide");
var side2 = localStorage.getItem("secondSide");
var avatar1 =localStorage.getItem("firstAvatar");
var avatar2 = localStorage.getItem("secondAvatar");
var gameNumber = localStorage.getItem("gameNumber");
var counter = gameNumber;
var mouseGame = parseInt(counter) + 9;
var avatars = [];
avatars[0] = "http://s3.amazonaws.com/images.hitfix.com/assets/2083/catniss.jpg";
avatars[1] = "https://wedothings.files.wordpress.com/2013/04/thor_kitty_by_jennyparks-d61y6yj.jpg";
avatars[2] = "http://i.imgur.com/f13K3uk.png";
avatars[3] = "http://www.catster.com/wp-content/uploads/2015/06/alana-mccarthy-cat-star-trek.jpg";

avatars[4] = "https://static1.e926.net/data/0a/0c/0a0c8d10a0394f078885ebce9a3c3ac2.png";
avatars[5] = "https://img1.etsystatic.com/000/0/5244093/il_570xN.244547633.jpg";
avatars[6] = "http://img07.deviantart.net/1208/i/2009/087/5/4/wizard_dog_collab_by_crazyyellowfox.png";
avatars[7] = "http://orig05.deviantart.net/50ce/f/2013/073/3/f/huckleberry_hound_the_jedi_knight_by_mcsaurus-d5xzzfl.jpg";

console.log ('gameNumber: '+ gameNumber);
console.log ('counter: ' + counter);
console.log ('mouseGame: ' + mouseGame);
console.log ('first Side: '+ side1);
console.log ('second Side' + side2);

if (counter%2 === 0) {
	console.log("Play order:");
	console.log("First is "+name2+" who is the "+side2);
	console.log("Second is "+name1+" who is the "+side1);
	$('.firstPlayerName').append(name2);
	$('.secondPlayerName').append(name1);
	//construct players avatar img
	// var avatarPlayerOne = "";
	// avatarPlayerOne = "<img class='first_avatar' src='"+avatars[avatar2]+"''>";
	// $('.first_turn').html(avatarPlayerOne);
	$('.first_turn').attr('id', avatar2);
	// var avatarPlayerTwo = "";
	// avatarPlayerTwo = "<img class='second_avatar' src='"+avatars[avatar1]+"''>"
	// $('.second_turn').html(avatarPlayerTwo);
	$('.second_turn').attr('id', avatar1);
	} else {
		console.log("Play order:");
		console.log("First is "+name1+" who is the "+side1);
		console.log("Second is "+name2+" who is the "+side2);
		$('.firstPlayerName').append(name1);
		$('.secondPlayerName').append(name2);
		//construct players avatar img
		// var avatarPlayerOne = "";
		// avatarPlayerOne = "<img class='first_avatar' src='"+avatars[avatar1]+"''>"
		// $('.first_turn').append(avatarPlayerOne);
		$('.first_turn').attr('id', avatar1);
		// var avatarPlayerTwo = "";
		// avatarPlayerTwo = "<img class='second_avatar' src='"+avatars[avatar2]+"''>"
		// $('.second_turn').append(avatarPlayerTwo);
		$('.second_turn').attr('id', avatar2);
	}
$('#gameNumber').append(gameNumber)

var winningPlayer = 0;
var playOneArray = [];
var playTwoArray = [];
var boardArray = [];
for (var i=0;i<9;i++) {
	boardArray[i] = i;
	};
var gameBoardArray = [];
for (var i=0;i<9;i++) {
	gameBoardArray[i] = "W";
};

// win fxn
// if player array length <3, no winner yet - dont need to check
// play array length - will determine loop -
//gameBoardArray will show the board:  i.e.  C W D
//											 D C W
//											 W W C      which will be a win for cat
// setting up current row/col/diag arrays from current gameboard array
function winnerDetermination () {

	if (
		(gameBoardArray[0]==="C"&&gameBoardArray[3]==="C"&&gameBoardArray[6]==="C")||
		(gameBoardArray[1]==="C"&&gameBoardArray[4]==="C"&&gameBoardArray[7]==="C")||
		(gameBoardArray[2]==="C"&&gameBoardArray[5]==="C"&&gameBoardArray[8]==="C")||
		(gameBoardArray[0]==="C"&&gameBoardArray[1]==="C"&&gameBoardArray[2]==="C")||
		(gameBoardArray[3]==="C"&&gameBoardArray[4]==="C"&&gameBoardArray[5]==="C")||
		(gameBoardArray[6]==="C"&&gameBoardArray[7]==="C"&&gameBoardArray[8]==="C")||
		(gameBoardArray[0]==="C"&&gameBoardArray[4]==="C"&&gameBoardArray[8]==="C")||
		(gameBoardArray[2]==="C"&&gameBoardArray[4]==="C"&&gameBoardArray[6]==="C")
		) {

		// winnerOfGame = "Cat";
			if (side1 === "Cat") {
				winningPlayer = 1;
				$('.first_turn').toggleClass('seen');
			} else {
				winningPlayer = 2;
				$('.second_turn').toggleClass('seen');
			}
			localStorage.setItem("winningPlayer", winningPlayer);
			localStorage.setItem("recentGame", 1);
			setTimeout(function(){ window.location.replace("WinnerAndHighScore.html"); }, 1000);
	} else if (
		(gameBoardArray[0]==="D"&&gameBoardArray[3]==="D"&&gameBoardArray[6]==="D")||
		(gameBoardArray[1]==="D"&&gameBoardArray[4]==="D"&&gameBoardArray[7]==="D")||
		(gameBoardArray[2]==="D"&&gameBoardArray[5]==="D"&&gameBoardArray[8]==="D")||
		(gameBoardArray[0]==="D"&&gameBoardArray[1]==="D"&&gameBoardArray[2]==="D")||
		(gameBoardArray[3]==="D"&&gameBoardArray[4]==="D"&&gameBoardArray[5]==="D")||
		(gameBoardArray[6]==="D"&&gameBoardArray[7]==="D"&&gameBoardArray[8]==="D")||
		(gameBoardArray[0]==="D"&&gameBoardArray[4]==="D"&&gameBoardArray[8]==="D")||
		(gameBoardArray[2]==="D"&&gameBoardArray[4]==="D"&&gameBoardArray[6]==="D")
		)  {
			if (side1 === "Dog") {
				winningPlayer = 1;
				$('.first_turn').toggleClass('seen');
			} else {
				winningPlayer = 2;
				$('.second_turn').toggleClass('seen');
			}
			localStorage.setItem("winningPlayer", winningPlayer);
			localStorage.setItem("recentGame", 1);
			setTimeout(function(){ window.location.replace("WinnerAndHighScore.html"); }, 1000);
	} else if (counter === mouseGame) {
		winningPlayer = 3;
		localStorage.setItem("recentGame", 1);
		localStorage.setItem("winningPlayer", winningPlayer);
		if (mouseGame%2 === 0) {
			$('.first_turn').toggleClass('seen');
		} else {
			$('.second_turn').toggleClass('seen');
		}
		setTimeout(function(){ window.location.replace("WinnerAndHighScore.html"); }, 1000);
	}	else {
		$('.first_turn').toggleClass('seen');
		$('.second_turn').toggleClass('seen');
		return;
	};
};

$('.first_turn').toggleClass('seen')

$( "button" ).mouseenter(function() {
  if (gameBoardArray[$(this).val()] === "W"){
  	$('.worldHover')[0].play();
  } else if (gameBoardArray[$(this).val()] === "C") {
  	$('.catHover')[0].play();
  } else if (gameBoardArray[$(this).val()] === "D") {
  	$('.dogHover')[0].play();
  }
});

$("button").on("click", function () {
	counter++
	if (winningPlayer != 0){
		counter--
		$('button').unbind('click');
	} else if (boardArray[$(this).val()] === 9) {
		counter--
	} else if (counter%2 === 0) {
		console.log('this should be player 1');
		playOneArray.push($(this).val());
		console.log(playOneArray);
		boardArray[$(this).val()] = 9;
		if (side1 === "Dog"){
			gameBoardArray[$(this).val()] = "D";
			$('.dogGrowl')[0].play();
			$(this).css('background-image', 'url("./Images/cute-puppy-photo.jpg")');
			$(this).css('background-position', '-9px');
			winnerDetermination();
		} else {
			gameBoardArray[$(this).val()] = "C";
			$('.catMeow')[0].play();
			$(this).css('background-image', 'url("./Images/cuteKitten.jpg")');
			// win fxn
			winnerDetermination();
		}
	} else {
		console.log("this should be player 2")
		playTwoArray.push($(this).val());
		console.log(playTwoArray);
		boardArray[$(this).val()] = 9;
		if (side2 === "Dog"){
			gameBoardArray[$(this).val()] = "D";
			$('.dogGrowl')[0].play();
			$(this).css('background-image', 'url("./Images/cute-puppy-photo.jpg")');
			$(this).css('background-position', '-9px');
			winnerDetermination();
		} else {
			gameBoardArray[$(this).val()] = "C";
			$('.catMeow')[0].play();
			$(this).css('background-image', 'url("./Images/cuteKitten.jpg")');
			// win fxn
			winnerDetermination();
		}
	}
});
});
