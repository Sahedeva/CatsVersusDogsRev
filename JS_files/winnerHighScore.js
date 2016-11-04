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

if (winner==1&&side1=='Cat'||winner==2&&side2=='Cat'){
  $('#eyeTiger')[0].play();
  $('#eyeTiger').on("ended", function() {
    var aud = document.getElementById("joyOde");
    aud.currentTime = 12;
    aud.play();
    // $('#joyOde').on('canplaythrough', function() {
    //     if(this.currentTime < 12){this.currentTime = 12;}
    //     $('#joyOde').attr('data-loop','1');
    //     $('#joyOde')[0].play();
    // });
  });
} else if (winner==1&&side1=='Dog'||winner==2&&side2=='Dog'){
  $('#dogsOut')[0].play();
  $('#dogsOut').on("ended", function() {
    var aud = document.getElementById("joyOde");
    aud.currentTime = 12;
    aud.play();
  });
} else {
  $('#whipWay')[0].play();
  $('#whipWay').on("ended", function() {
    var aud = document.getElementById("joyOde");
    aud.currentTime = 12;
    aud.play();
  });
}

var oneWinner = name1 + "is Victorious!";
var oneLoser = name1 + "is Defeated!";

var twoWinner = name2 + "is Victorious!";
var twoLoser = name2 + "is Defeated!";
console.log (name1+name2+side1+side2+avatar1+avatar2+winner+recentGame+gameNumber);

//construct players avatar img
var avaP1 = "<div style='display: inline-block;' class='ava_P1'></div>";
$('.playOne').append(avaP1);
$('.ava_P1').attr('id', avatar1);

var avaP2 = "<div style='display: inline-block;' class='ava_P2'></div>";
$('.playTwo').append(avaP2);
$('.ava_P2').attr('id', avatar2);

var avaM = "<div style='display: inline-block;' class='ava_M'></div>";
$('.playMouse').append(avaM);
$('.ava_M').attr('id', 'mouse');

//logic statements
if (winner == 1) {
	$('.oneWins').css('display', 'inline');
  $('.playOne').css('padding', '0px');
	$('.playOne').prepend("<div style='display: inline-block; vertical-align: middle; height: 265px;'>"+name1+"&nbsp</div>");
  $('.ava_P1').attr('id', avatar1);
	$('.playOne').append("<div style='display: inline-block; vertical-align: middle; height: 265px;'>&nbspis Victorious!</div>");
  $('.playTwo').css('padding', '36px 0px 0px 0px');
	$('.playTwo').prepend("<div style='display: inline-block; vertical-align: middle; height: 175px;'>"+name2+"&nbsp</div>");
  $('.ava_P2').attr('id', avatar2+"s");
	$('.playTwo').append("<div style='display: inline-block; vertical-align: middle; height: 175px;'>&nbspis Defeated!</div>");
	} else if (winner == 2) {
		$('.twoWins').css('display', 'inline');
    $('.playOne').css('padding', '36px 0px 0px 0px');
		$('.playOne').prepend("<div style='display: inline-block; vertical-align: middle; height: 175px;'>"+name1+"&nbsp</div>");
    $('.ava_P1').attr('id', avatar1+"s");
		$('.playOne').append("<div style='display: inline-block; vertical-align: middle; height: 175px;'>&nbspis Defeated!</div>");
    $('.playTwo').css('padding', '0px');
    $('.playTwo').prepend("<div style='display: inline-block; vertical-align: middle; height: 265px;'>"+name2+"&nbsp</div>");
    $('.ava_P2').attr('id', avatar2);
  	$('.playTwo').append("<div style='display: inline-block; vertical-align: middle; height: 265px;'>&nbspis Victorious!</div>");
	} else if (winner == 3) {
		$('.mouseWins').css('display', 'inline');
    $('.playMouse').css('padding', '0px');
  	$('.playMouse').prepend("<div style='display: inline-block; vertical-align: middle; height: 265px;'>Mouse&nbsp</div>");
    $('.ava_M').attr('id', "mouse");
  	$('.playMouse').append("<div style='display: inline-block; vertical-align: middle; height: 265px;'>&nbspis Victorious!</div>");
    $('.playOne').css('margin-top', '-175px');
		$('.playOne').prepend("<div style='display: inline-block; vertical-align: middle; height: 175px;'>"+name1+"&nbsp</div>");
    $('.ava_P1').attr('id', avatar1+"s");
		$('.playOne').append("<div style='display: inline-block; vertical-align: middle; height: 175px;'>&nbspis Defeated!</div>");
    $('.playTwo').css('margin-top', '-175px');
  	$('.playTwo').prepend("<div style='display: inline-block; vertical-align: middle; height: 175px;'>"+name2+"&nbsp</div>");
    $('.ava_P2').attr('id', avatar2+"s");
  	$('.playTwo').append("<div style='display: inline-block; vertical-align: middle; height: 175px;'>&nbspis Defeated!</div>");
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
    $('.avatar1').attr('id', avatar1+"s");
		$('.wins1').append(wins1)
		$('.name2').append(name2);
    $('.avatar2').attr('id', avatar2+"s");
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
    $('.avatar1').attr('id', avatar1+"s");
		$('.wins1').append(wins1)
		$('.name2').append(name2);
    $('.avatar2').attr('id', avatar2+"s");
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
    $('.avatar1').attr('id', avatar1+"s");
		$('.wins1').append(wins1)
		$('.name2').append(name2);
    $('.avatar2').attr('id', avatar2+"s");
		$('.wins2').append(wins2)
		$('.catWins').append(catW);
		$('.dogWins').append(dogW);
		$('.mouseScore').append(mouseW);
	} else {
		console.log("got here - recent game is 0 (i.e. refresh page)");
    $('.name1').append(name1);
    $('.avatar1').attr('id', avatar1+"s");
		$('.wins1').append(wins1)
		$('.name2').append(name2);
    $('.avatar2').attr('id', avatar2+"s");
		$('.wins2').append(wins2)
		$('.catWins').append(catW);
		$('.dogWins').append(dogW);
		$('.mouseScore').append(mouseW);
	}


});
