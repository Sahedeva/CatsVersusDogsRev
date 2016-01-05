$(function () {
var name1 = localStorage.getItem("firstPlayer");
var name2 = localStorage.getItem("secondPlayer");
var side1 = localStorage.getItem("firstSide");
var side2 = localStorage.getItem("secondSide");
var avatar1 =localStorage.getItem("firstAvatar");
var avatar2 = localStorage.getItem("secondAvatar");
var gameNumber = localStorage.getItem("gameNumber");
console.log ('gameNumber: '+ gameNumber);

$('.firstPlayerName').append(name1);
$('.secondPlayerName').append(name2);
$('#gameNumber').append(gameNumber)


var avatars = [];
avatars[0] = "http://s3.amazonaws.com/images.hitfix.com/assets/2083/catniss.jpg";
avatars[1] = "https://wedothings.files.wordpress.com/2013/04/thor_kitty_by_jennyparks-d61y6yj.jpg";
avatars[2] = "http://i.imgur.com/f13K3uk.png";
avatars[3] = "http://www.catster.com/wp-content/uploads/2015/06/alana-mccarthy-cat-star-trek.jpg";

avatars[4] = "https://static1.e926.net/data/0a/0c/0a0c8d10a0394f078885ebce9a3c3ac2.png";
avatars[5] = "https://img1.etsystatic.com/000/0/5244093/il_570xN.244547633.jpg";
avatars[6] = "http://img07.deviantart.net/1208/i/2009/087/5/4/wizard_dog_collab_by_crazyyellowfox.png";
avatars[7] = "http://orig05.deviantart.net/50ce/f/2013/073/3/f/huckleberry_hound_the_jedi_knight_by_mcsaurus-d5xzzfl.jpg";

//construct players avatar img
var avatarPlayerOne = "";
avatarPlayerOne = "<img class='first_avatar' src='"+avatars[avatar1]+"''>"
$('.first_turn').append(avatarPlayerOne);

var avatarPlayerTwo = "";
avatarPlayerTwo = "<img class='second_avatar' src='"+avatars[avatar2]+"''>"
$('.second_turn').append(avatarPlayerTwo);

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
		if (mouseGame === 10) {
			// $('.first_turn').prepend("The Cat is victorious!!! YAY!");
			winningPlayer = 1;
			localStorage.setItem("winningPlayer", winningPlayer);
			localStorage.setItem("recentGame", 1);
			setTimeout(function(){ window.location.replace("WinnerAndHighScore.html"); }, 2000);	
		} else {
			// $('.second_turn').prepend("The Cat is victorious!!! YAY!");
			winningPlayer = 2;
			localStorage.setItem("winningPlayer", winningPlayer);
			localStorage.setItem("recentGame", 1);
			setTimeout(function(){ window.location.replace("WinnerAndHighScore.html"); }, 2000);
		}
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
		// winnerOfGame = "Dog";
		if (mouseGame === 10) {
			// $('.second_turn').prepend("The Dog has won, Woof Woof!");
			winningPlayer = 2;
			localStorage.setItem("winningPlayer", winningPlayer);
			localStorage.setItem("recentGame", 1);
			setTimeout(function(){ window.location.replace("WinnerAndHighScore.html"); }, 2000);		
		} else {
			// $('.first_turn').prepend("The Dog has won, Woof Woof!");
			winningPlayer = 1;
			localStorage.setItem("winningPlayer", winningPlayer);
			localStorage.setItem("recentGame", 1);
			setTimeout(function(){ window.location.replace("WinnerAndHighScore.html"); }, 2000);		
		}
		
	} else if (counter === mouseGame) {
		winningPlayer = 3;
		localStorage.setItem("recentGame", 1);
		localStorage.setItem("winningPlayer", winningPlayer);
		if (mouseGame === 10) {
			$('.first_avatar').toggleClass('seen');
		} else {
			$('.second_avatar').toggleClass('seen');
		}
		setTimeout(function(){ window.location.replace("WinnerAndHighScore.html"); }, 2000);
		
		// $('.mouse').toggleClass('seen');
		// $(".mouse_area").prepend("The Mouse has won, that is terrible!");
	}	else {
		$('.first_avatar').toggleClass('seen');
		$('.second_avatar').toggleClass('seen');
		return;
	};
};

if (side1 === "Cat") {
	var counter = 1;
	var mouseGame = 10;
} else {
	var counter = 0;
	var mouseGame = 9;
}

// var winnerOfGame = "";
$('.first_avatar').toggleClass('seen')

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
		playOneArray.push($(this).val());
		console.log(playOneArray);
		boardArray[$(this).val()] = 9;
		gameBoardArray[$(this).val()] = "C";
		$('.catMeow')[0].play();
		$(this).css('background-image', 'url(http:img1.wikia.nocookie.net/__cb20140519075925/thehungergames/images/8/84/Kitten-16219-1280x800.jpg)');
		// win fxn
		winnerDetermination();
		// if (winnerOfGame === "Cat" || winnerOfGame === "Dog" || winnerOfGame === "Mouse") {
		// 	$("footer").html(winnerOfGame + " has won, Yay!");
		// }  $("footer").html("No winner yet, be warry of the mouse");
	} else {
		playTwoArray.push($(this).val());
		console.log(playTwoArray);
		boardArray[$(this).val()] = 9;
		gameBoardArray[$(this).val()] = "D";
		$('.dogGrowl')[0].play();
		$(this).css('background-image', 'url(http://www.hd-wallpapersdownload.com/upload/bulk-upload/cute-puppy-photo.jpg)');
		$(this).css('background-position', '-9px');
		winnerDetermination();
		// if (winnerOfGame === "Cat" || winnerOfGame === "Dog" || winnerOfGame === "Mouse") {
		// 	$("footer").html(winnerOfGame + " has won, Yay!");
		// }  $("footer").html("No winner yet, be warry of the mouse");
	}
});
});

	// boardColArray[0]==="C"||boardRowArray[0]==="C"||boardDiagArray[0]==="C"||
		// boardColArray[1]==="C"||boardRowArray[1]==="C"||boardDiagArray[1]==="C"||
		// boardColArray[2]==="C"||boardRowArray[2]==="C"||boardDiagArray[2]==="C") { 
// boardColArray[0] = [gameBoardArray[0],gameBoardArray[3],gameBoardArray[6]]
	// boardColArray[1] = [gameBoardArray[1],gameBoardArray[4],gameBoardArray[7]]
	// boardColArray[2] = [gameBoardArray[2],gameBoardArray[5],gameBoardArray[8]]

	// boardRowArray[0] = [gameBoardArray[0],gameBoardArray[1],gameBoardArray[2]]
	// boardRowArray[1] = [gameBoardArray[3],gameBoardArray[4],gameBoardArray[5]]
	// boardRowArray[2] = [gameBoardArray[6],gameBoardArray[7],gameBoardArray[8]]

	// boardDiagArray[0] = [gameBoardArray[0],gameBoardArray[4],gameBoardArray[8]]
	// boardDiagArray[1] = [gameBoardArray[2],gameBoardArray[4],gameBoardArray[6]]
	// boardDiagArray[2] = 0
// columns 3 values in array [ [0,3,6], [1,4,7],[2,5,8]]
// var boardColArray = [];
// // rows 3 values in array [ [0,1,2],[3,4,5],[6,7,8]]
// var boardRowArray = [];
// // diagonals 2 values in array [ [0,4,8],[2,4,6]]
// var boardDiagArray = [];
// // var winningCombo = [ [0,1,2],
// // 					 [3,4,5],
// // 					 [6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ]
// console.log(boardArray);

	// background-image: url(http://img1.wikia.nocookie.net/__cb20140519075925/thehungergames/images/8/84/Kitten-16219-1280x800.jpg);
	// background-position: -75px 0px;
	// background-image: url(http://www.hd-wallpapersdownload.com/upload/bulk-upload/cute-puppy-photo.jpg);