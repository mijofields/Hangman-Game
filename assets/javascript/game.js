
// set variables



var wordArray = [{a:"pineapple", clue: "A large sweet tropical fruit"}, {a:"vegetarian", clue: "one who does not consume meat"}, {a: "candidate", clue: "someone running for election"}, {a: "knowledge", clue: "gained through experience or education"}, 
				{a: "jamaica", clue: "a fast island in the carribean"}, {a: "crocodile", clue: "these reptiles can bite"}, {a: "conversation", clue: "a spoken exchange of ideas"}, {a: "rastafari", clue: "a new religious and social movement"}, 
				{a: "dreadlocks", clue: "a long ropelike hairstyle"}];

var randomObj = wordArray[Math.floor(Math.random() * wordArray.length)];
var randomWord = randomObj.a;
var randomClue = randomObj.clue;
var randomWordArr = [randomWord];
var underScores = [];
var wrongLetter = [];
var guessesLeft = 6;
var lettersUsed = [];
var correctLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
var correctGuesses = [];
var matches = [];
var winCount =0;
var lossCount=0;
var resetCheck = false;

				
				

				function startGame () {

   
				console.log(randomWord);


        		    for (var i = 0; i < randomWord.length; i++)
				{
					underScores[i] = "_";
					correctGuesses[i] = "";
				}
				//sending correct number of underscores to the game

				spaces = underScores.join(" ");
				console.log(spaces);
				$("#blankWord").text(spaces);
				$("#guessesLeft").text(guessesLeft);
				$("#warning").text(randomClue);
				$(".start").removeClass("active").addClass( "disabled" );


			} //end of startgame function



			function reset(){


				if (resetCheck){

					resetCheck = false;

				$(".reset").removeClass("active").addClass( "disabled" );

				randomObj = wordArray[Math.floor(Math.random() * wordArray.length)];
				randomWord = randomObj.a;
				randomClue = randomObj.clue
				wrongLetter = [];
				correctGuesses=[];
				underScores=[];
				guessesLeft = 6;
				lettersUsed = [];
				matches = [];  		
				console.log("reset " + randomWord);
				noCommas = wrongLetter.join(" ");

						    for (var i = 0; i < randomWord.length; i++)
				{
					underScores[i] = "_";
					correctGuesses[i] = "";
				}
				//sending correct number of underscores to the game
				spaces = underScores.join(" ");

				
				console.log("spaces " + spaces);
				console.log("underscore" + underScores);
				console.log("correctGuesses" + correctGuesses);
					
				$("#blankWord").text(spaces);
				$("#guessesLeft").text(guessesLeft);
				$("#letterbin").text(noCommas);
				$("#warning").text(randomClue);



			}} // end of reset
 

				document.onkeyup = function(event) {

				var userInput = String.fromCharCode(event.keyCode).toLowerCase();
				var wordCheck = randomWord.indexOf(userInput);
				console.log("word check " + wordCheck);



				if(guessesLeft<=0 || matches===randomWord){

					return;
				}



        		if (correctLetters.indexOf(userInput)===-1 && guessesLeft >=0) {


        		$("#warning").text("This is a word guessing game, letters only please...");



        		} else if (wordCheck ===-1 && lettersUsed.indexOf(userInput)===-1 && guessesLeft >= 0){

          		$("#warning").text(randomClue);



          		console.log("repeat letters "+	lettersUsed.indexOf(userInput));


          			guessesLeft--;
          			console.log("guesses left " + guessesLeft);

          				wrongLetter.push(userInput);
          				wrongLetter = $.unique(wrongLetter);
          				lettersUsed.push(userInput);
          				lettersUsed = $.unique(lettersUsed);

          				console.log("letters used " + lettersUsed);
						noCommas = wrongLetter.join(" ");
						$("#letterbin").text(noCommas);
		
						$("#guessesLeft").text(guessesLeft);

						if(guessesLeft===1){

							$("#warning").text("Careful now, you're close to losing....");
						}

						if(guessesLeft===0){

							$("#warning").text("You lose!!! Hit Reset to try again.");
							lossCount++;
							$("#losses").text(lossCount);
							$(".reset").removeClass("disabled").addClass("active");
							resetCheck = true;
							return;

						}






          		}//end of else if




          		else {



          			$("#warning").text(randomClue);


          			for (var i =0; i < randomWord.length; i++){

					if(userInput===randomWord[i]){

					lettersUsed.push(userInput);
          			lettersUsed = $.unique(lettersUsed);
          			// userInput.push(correctGuesses); DAFUCK?
          			console.log("letters used " + lettersUsed);


					underScores.splice([i],1,userInput);
					correctGuesses.splice([i],1,userInput);
					matches = correctGuesses.join("");

					console.log("correct guesses " + matches);

          			// console.log("guess " + correctGuesses);
          				
					spaces = underScores.join(" ");					
					$("#blankWord").text(spaces);
					console.log(underScores + " underscores");


					if(matches===randomWord){

						$("#warning").text("Winner Winner Chicken Dinner! Hit Reset to play again")
						resetCheck = true;
						winCount++;
						$("#wins").text(winCount);
						$(".reset").removeClass("disabled").addClass("active");
					}


          		}



          		};






          	}};








$(".start").click(function(){startGame(); });
$(".reset").click(function(){reset(); });




