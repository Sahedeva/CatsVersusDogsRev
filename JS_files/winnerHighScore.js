$(function () {
var name1 = localStorage.getItem("firstPlayer");
var name2 = localStorage.getItem("secondPlayer");
var side1 = localStorage.getItem("firstSide");
var side2 = localStorage.getItem("secondSide");
var avatar1 =localStorage.getItem("firstAvatar");
var avatar2 = localStorage.getItem("secondAvatar");
var winner = localStorage.getItem("winningPlayer");
var gameNumber = localStorage.getItem("gameNumber");
var recentGame = localStorage.getItem("recentGame");


var oneWinner = name1 + "is Victorious!";
var oneLoser = name1 + "is Defeated!";

var twoWinner = name2 + "is Victorious!";
var twoLoser = name2 + "is Defeated!";
console.log (name1+name2+side1+side2+avatar1+avatar2+winner+recentGame+gameNumber);


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
var avatarDisplayOne = "";
avatarPlayerOne = "<img class='first_avatar' src='"+avatars[avatar1]+"''>";
avatarDisplayOne = "<img class='avatar1' src='"+avatars[avatar1]+"''>";
$('.playOne').append(avatarPlayerOne);
// avatarPlayerOne = "'url("+avatars[avatar1]+")'";
// console.log(avatarPlayerOne+oneWinner+oneLoser);
// $('.playOne').css('background-image', avatarPlayerOne);


var avatarPlayerTwo = "";
var avatarDisplayTwo = "";
avatarPlayerTwo = "<img class='second_avatar' src='"+avatars[avatar2]+"''>"
avatarDisplayTwo = "<img class='avatar2' src='"+avatars[avatar2]+"''>";
// avatarPlayerTwo = "'url("+avatars[avatar2]+")'";
$('.playTwo').append(avatarPlayerTwo);
// $('.playTwo').css('background-image', avatarPlayerTwo);

$('.playMouse').append('<img class ="mouse_avatar" src="http://www.kachinahouse.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/d/l/dl_mouse4_1.jpg">');

//logic statements
if (winner == 1) {
	$('.second_avatar').css({ "height": "125px", "width": "125px" });
	$('.oneWins').css('display', 'inline');
	$('.playOne').prepend(name1+"  ");
	$('.playOne').append("  is Victorious!");
	$('.playTwo').prepend(name2+"  ");
	$('.playTwo').append("  is Defeated!");
	} else if (winner == 2) {
		$('.first_avatar').css({ "height": "125px", "width": "125px" });
		$('.twoWins').css('display', 'inline');
		$('.playOne').prepend(name1+"  ");
		$('.playOne').append("  is Defeated!");
		$('.playTwo').prepend(name2+"  ");
		$('.playTwo').append("  is Victorious!");
	} else if (winner == 3) {
		$('.first_avatar').css({ "height": "125px", "width": "125px" });
		$('.second_avatar').css({ "height": "125px", "width": "125px" });
		$('.mouseWins').css('display', 'inline');
		$('.playMouse').prepend("Mouse is  ");
		$('.playMouse').append("  Victorious!");
		$('.playOne').prepend(name1+"  ");
		$('.playOne').append("  is Defeated!");
		$('.playTwo').prepend(name2+"  ");
		$('.playTwo').append("  is Defeated!");
		// $('.playOne').prepend(oneLoser);
		// $('.playTwo').prepend(twoLoser);
	};

var wins1 = localStorage.getItem("firstPlayerwins");
var wins2 = localStorage.getItem("secondPlayerwins");
var catW = localStorage.getItem("catWins");
var dogW = localStorage.getItem("dogWins");
var mouseW = localStorage.getItem("mouseWins");
if (catW) {
	console.log("catwins already has a value");
} else {
	var catW = 0;
};
if (dogW) {
	console.log("dogwins already has a value");
} else {
	var dogW = 0;
};
if (mouseW) {
	console.log("mousewins already has a value");
} else {
	var mouseW = 0;
}

if (winner == 1 && recentGame == 1) {
		console.log("got here - player one winner");
		localStorage.setItem("recentGame", 0);
		wins1++
		gameNumber++
		if (side1 === "Cat") {
			catW++
			$('.catWins').append(catW);
			$('.dogWins').append(dogW);
			$('.mouseScore').append(mouseW);
		} else {
			dogW++
			$('.catWins').append(catW);
			$('.dogWins').append(dogW);
			$('.mouseScore').append(mouseW);
		}
		localStorage.setItem("firstPlayerwins",wins1);
		localStorage.setItem("secondPlayerwins",wins2);
		localStorage.setItem("catWins",catW);
		localStorage.setItem("dogWins",dogW);
		localStorage.setItem("mouseWins",mouseW);
		localStorage.setItem("gameNumber",gameNumber);
		$('.name1').append(name1);
		$('.avatar1').append(avatarDisplayOne)
		$('.wins1').append(wins1)
		$('.name2').append(name2);
		$('.avatar2').append(avatarDisplayTwo)
		$('.wins2').append(wins2)
	} else if (winner == 2 && recentGame == 1) {
		console.log("got here - player two winner");
		localStorage.setItem("recentGame", 0);
		wins2++
		gameNumber++
		if (side2 === "Cat") {
			catW++
			$('.catWins').append(catW);
			$('.dogWins').append(dogW);
			$('.mouseScore').append(mouseW);
		} else {
			dogW++
			$('.catWins').append(catW);
			$('.dogWins').append(dogW);
			$('.mouseScore').append(mouseW);
		}
		localStorage.setItem("firstPlayerwins",wins1);
		localStorage.setItem("secondPlayerwins",wins2);
		localStorage.setItem("catWins",catW);
		localStorage.setItem("dogWins",dogW);
		localStorage.setItem("mouseWins",mouseW);
		localStorage.setItem("gameNumber",gameNumber);
		$('.name1').append(name1);
		$('.avatar1').append(avatarDisplayOne)
		$('.wins1').append(wins1)
		$('.name2').append(name2);
		$('.avatar2').append(avatarDisplayTwo)
		$('.wins2').append(wins2)
	} else if (winner == 3 && recentGame == 1) {
		console.log("got here - mouse winner");
		localStorage.setItem("recentGame", 0);
		mouseW++
		gameNumber++
		localStorage.setItem("firstPlayerwins",wins1);
		localStorage.setItem("secondPlayerwins",wins2);
		localStorage.setItem("catWins",catW);
		localStorage.setItem("dogWins",dogW);
		localStorage.setItem("mouseWins",mouseW);
		localStorage.setItem("gameNumber",gameNumber);
		$('.name1').append(name1);
		$('.avatar1').append(avatarDisplayOne)
		$('.wins1').append(wins1)
		$('.name2').append(name2);
		$('.avatar2').append(avatarDisplayTwo)
		$('.wins2').append(wins2)
		$('.catWins').append(catW);
		$('.dogWins').append(dogW);
		$('.mouseScore').append(mouseW);
	} else {
		console.log("got here - recent game is 0 (i.e. refresh page)");
		$('.name1').append(name1);
		$('.avatar1').append(avatarDisplayOne)
		$('.wins1').append(wins1)
		$('.name2').append(name2);
		$('.avatar2').append(avatarDisplayTwo)
		$('.wins2').append(wins2)
		$('.catWins').append(catW);
		$('.dogWins').append(dogW);
		$('.mouseScore').append(mouseW);
	}


});
