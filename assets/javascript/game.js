


// set variables

var wordArray = ["pineapple", "gratification", "candidate", "tropical", "competence", "leftovers", "overwhelm", "psychology", "conversation", "broadcast"];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var underScores = [];
var wrongLetter = [];
var guessesLeft = 7;
var lettersUsed = [];
var wordCheckArr = [];

   				function startGame () {

   					console.log(randomWord); 

   					underScores = [];
   					wrongLetter = [];
   					guessesLeft = 7;

        		    for (var i = 0; i < randomWord.length; i++)
				{
					underScores[i] = "_";
				}
				//sending correct number of underscores to the game

				spaces = underScores.join(" ");
				console.log(spaces);
				document.getElementById('blankWord').innerHTML = spaces;
				document.getElementById('guessesleft').innerHTML=guessesLeft;


			} //end of startgame function

			//checks to see if a letter is pressed, 

				document.onkeyup = function(event) {

				var userInput = String.fromCharCode(event.keyCode).toLowerCase();
				var wordCheck = randomWord.indexOf(userInput);


		if (userInput === "a" || userInput === "b" || userInput === "c" || userInput === "d" || userInput === "e" || userInput === "f"
		|| userInput === "g" || userInput === "h" || userInput === "i" || userInput === "j" || userInput === "k" 
        || userInput === "l" || userInput === "m" || userInput === "n" || userInput === "o" || userInput === "p" 
        || userInput === "q" || userInput === "r" || userInput === "s" || userInput === "t" || userInput === "u" 
        || userInput === "v" || userInput === "w" || userInput === "x" || userInput === "y" || userInput === "z") {

				document.getElementById('warning').innerHTML = "";

			//perform check on incorrect letter before any for loop.


				if (wordCheck===-1) {

						wrongLetter.push(userInput);
						reduced = Object.keys(wrongLetter.reduce((p,c) => (p[c] = true,p),{}));
						noCommas = reduced.join(" ");
						document.getElementById('letterbin').innerHTML = noCommas;
						console.log(reduced + " reduced");
						guessesLeft--;
						console.log(guessesLeft +" guesses left");
						document.getElementById('guessesleft').innerHTML=guessesLeft;
						if(guessesLeft===0){

							alert("Game Over")
						}


				}



				else{ //guess must be correct so publish to the page


				for (var i =0; i < randomWord.length; i++){

					if(userInput===randomWord[i]){

					underScores.splice([i],1,userInput);	
					spaces = underScores.join(" ");					
					document.getElementById('blankWord').innerHTML = spaces;
					console.log(underScores + " underscores");}


				}}}

		else {

					document.getElementById('warning').innerHTML = "This is a word guessing game, letters only please...";
				
				

			}};









			startGame();
