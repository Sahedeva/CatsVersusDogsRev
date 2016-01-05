$(function () {
		//need to have check name function so that
		//returning players don't get overwritten
		var players = [];
		var message = "";
		var playerOneSide = "";
		var playerTwoSide = "";
		var playerOneAvatar = 0;
		var playerTwoAvatar = 0;
		var playOneDone = false;
		$("#submit").on("click", function() {
			$("#nameAgeInput").toggle();
			if($('#age0').val()<$('#age1').val()){
				players.push($('#name1').val());
				players.push($('#name0').val());
				$("#playOrder").append("Of course, age comes before beauty!\n");
			} else if ($('#age1').val()<$('#age0').val()){
				players.push($('#name0').val());
				players.push($('#name1').val());
				$("#playOrder").append("Of course, age comes before beauty!\n");
			} else {
				$("#playOrder").append("Since you are both the same age. The first warrior entry will play first.\n");
				players.push($('#name0').val());
				players.push($('#name1').val());
			}	
			
			playerOneName = players[0];
			playerTwoName = players[1];
			message = playerOneName + ", you get to choose a faction to lead into battle! Choose wisely warrior!\n";
			$("#playOrder").append(message);
			$("#sideSelection").toggle();
		});
			
		$(".choice").on("click", function(){
			playerOneSide = $(this).val();
			message = playerOneName + ",now it is time to choose your avatar!"
			$('#playOrder').html(message);
			if (playerOneSide === "Dog") {
				$("#sideSelection").toggle();
				playerTwoSide = "Cat";
				$("#dogAvatar").toggle();
			} else if (playerOneSide === "Cat") {
				$("#sideSelection").toggle();
				playerTwoSide = "Dog";
				$("#catAvatar").toggle();	
			}
		});

	
		$(".choice1").on("click", function(){
			if (playerOneSide === "Cat") {
			playerOneAvatar = $(this).val();
			message = playerTwoName + ", now it is time to choose your avatar!\n";
			$('#playOrder').html(message);
			$("#catAvatar").toggle();
			$("#dogAvatar2").toggle();
			}
		});

		$(".choice1").on("click", function(){
			if (playerOneSide === "Dog") {
			playerOneAvatar = $(this).val();
			message = playerTwoName + ", now it is time to choose your avatar!\n";
			$('#playOrder').html(message);
			$("#dogAvatar").toggle();
			$("#catAvatar2").toggle();
			}
		});

		$(".choice2").on("click", function(){
			playerTwoAvatar = $(this).val();
			if (playerTwoSide === "Dog") {
				$("#dogAvatar2").hide();
				$("#catAvatar2").hide();
				console.log(playerOneName + playerOneSide + playerOneAvatar + playerTwoName + playerTwoSide + playerTwoAvatar);
				localStorage.setItem("firstPlayer", playerOneName);
				localStorage.setItem("secondPlayer", playerTwoName);
				localStorage.setItem("firstSide", playerOneSide);
				localStorage.setItem("secondSide", playerTwoSide);
				localStorage.setItem("firstAvatar", playerOneAvatar);
				localStorage.setItem("secondAvatar", playerTwoAvatar);
				localStorage.setItem("gameNumber", 1);
				localStorage.setItem("firstPlayerwins", 0);
				localStorage.setItem("secondPlayerwins", 0);
			} else if (playerTwoSide === "Cat") {
				$("#catAvatar2").hide();
				$("#dogAvatar2").hide();
				console.log(playerOneName + playerOneSide + playerOneAvatar + playerTwoName + playerTwoSide + playerTwoAvatar);
				localStorage.setItem("firstPlayer", playerOneName);
				localStorage.setItem("secondPlayer", playerTwoName);
				localStorage.setItem("firstSide", playerOneSide);
				localStorage.setItem("secondSide", playerTwoSide);
				localStorage.setItem("firstAvatar", playerOneAvatar);
				localStorage.setItem("secondAvatar", playerTwoAvatar);
				localStorage.setItem("gameNumber", 1);
				localStorage.setItem("firstPlayerwins", 0);
				localStorage.setItem("secondPlayerwins", 0);
			}
		});

	
		});

		
		
		
		// $(".choice1").on("click", function(){
		// 	if (playerOneSide === "Cat") {
		// 	playerOneAvatar = $(this).val();
		// 	}
		// });

		// if ()
		// message = playerTwoName + ", now it is time to choose your avatar!\n";
		// $('#playOrder').html(message);
		// $("catAvatar").toggle();
		// $("dogAvatar").toggle();			
		// $(".choice1").on("click", function(){
		// playerTwoAvatar = $(this).val();
		// });
		
		
		


// });
			

		
			
	//code for avatar selection		

			
			// $('#pageLink').append('<button id="play">Play Game</button>');
			// $('#play').on("click", function () {
			// 	alert(playerOneSide);
			// });

		// });
	// });
// 			$("#avatarSelection").append("Now it is time to choose your avatars!\n"+playerOneName+" you will go first.");
// 			$("#avatarSelection").append('<select id="catAva"><option value="0"><img src="http://s3.amazonaws.com/images.hitfix.com/assets/2083/catniss.jpg"></option><option value="1"><img src="https://wedothings.files.wordpress.com/2013/04/thor_kitty_by_jennyparks-d61y6yj.jpg"></option><option value="2"><img src="http://i.imgur.com/f13K3uk.png"></option><option value="3"><img src="http://www.catster.com/wp-content/uploads/2015/06/alana-mccarthy-cat-star-trek.jpg"></option></select>');
// 			$("#catAva").on("click", function(){
// 				playerOneAvatar = ($"#catAva").val();

// 			});
// 			$("#secondAvatar").append("\nNow it is time for you to chose your avatar, "+playerTwoName);
// 			$("#secondAvatar").append('<select id="dogAva"><option value="0"><img src="http://s3.amazonaws.com/images.hitfix.com/assets/2083/catniss.jpg"></option><option value="1"><img src="https://wedothings.files.wordpress.com/2013/04/thor_kitty_by_jennyparks-d61y6yj.jpg"></option><option value="2"><img src="http://i.imgur.com/f13K3uk.png"></option><option value="3"><img src="http://www.catster.com/wp-content/uploads/2015/06/alana-mccarthy-cat-star-trek.jpg"></option></select>');
// 			$("#dogAva").on("click", function(){
// 				playerOneAvatar = ($"#catAva").val());
			
// 			})

// //need code to push avatar selection up to where cat and dog choice made to make list more clear without more if statements
// //after avatar selection then will use local storage to set
// //first player name, first player choice (cat or dog) and 
// // first player avatar number and then repeat for player2
// //then will have a link button to game page
			
// 			alert(playerOneName+playerTwoName);

		// });
		

		// if (parseInt(playerOneAge)<parseInt(playerTwoAge)) {
		// 	var temp = playerOneName;
		// 	playerOneName = playerTwoName;
		// 	playerTwoName = temp;
		// };
		// var playerOneSide;
		// var playerTwoSide;
		// 
		// });








// '<select id="CD"><option value="Cat">Cat</option><option value="Dog">Dog</option></select>'

// });