


// set variables

var wordArray = ["pineapple", "gratification", "candidate", "tropical", "competence", "leftovers", "overwhelm", "psychology", "conversation", "broadcast"];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var underScores = [];
var wrongLetter = [];
var guessesLeft = 7;
var lettersUsed = [];



// Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        // var userInput = String.fromCharCode(event.keyCode).toLowerCase();


        // check that guess is only letters.  No numbers or special characters allowed.



        // if (userInput === "a" || userInput === "b" userInput === "c" || userInput === "d" || userInput === "e" || userInput === "f" 
        // || userInput === "g" || userInput === "h" || userInput === "i" || userInput === "j" || userInput === "k" 
        // || userInput === "l" || userInput === "m" || userInput === "n" || userInput === "o" || userInput === "p" 
        // || userInput === "q" || userInput === "r" || userInput === "s" || userInput === "t" || userInput === "u" 
        // || userInput === "v" || userInput === "w" || userInput === "x" || userInput === "y" || userInput === "z")

        		//chooses a random word from the wordArray and then pushes the number of underscores to underscores var

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
				document.getElementById('blankWord').innerHTML = spaces;


			}

			//checks to see if a letter is pressed

				document.onkeyup = function(event) {

				var userInput = String.fromCharCode(event.keyCode).toLowerCase();



		if (userInput === "a" || userInput === "b" || userInput === "c" || userInput === "d" || userInput === "e" || userInput === "f"
		|| userInput === "g" || userInput === "h" || userInput === "i" || userInput === "j" || userInput === "k" 
        || userInput === "l" || userInput === "m" || userInput === "n" || userInput === "o" || userInput === "p" 
        || userInput === "q" || userInput === "r" || userInput === "s" || userInput === "t" || userInput === "u" 
        || userInput === "v" || userInput === "w" || userInput === "x" || userInput === "y" || userInput === "z") {

				document.getElementById('warning').innerHTML = "";

			for (var i = 0; i< randomWord.length; i++)

			{ //if the letter selected is in the random word, print that letter to the html page, log in lettersUsed

				if (userInput === randomWord[i].toLowerCase()) {

					underScores.splice([i],1,userInput);
					// lettersUsed.push(userInput);
					spaces = underScores.join(" ");					
					document.getElementById('blankWord').innerHTML = spaces;
						console.log(underScores);
						console.log(underScores.indexOf(userInput));
		

				}

			else { //if the letter selected is not in the randomWord and has not been guessed previously

				if (wrongLetter.indexOf(userInput) ===-1 && underScores.indexOf(userInput) ===!-1)

				{

				wrongLetter.push(userInput);
				noCommas = wrongLetter.join(" ");
				document.getElementById('letterbin').innerHTML = noCommas;}
	

				

			}

			}


		}


				//if not a letter sends a warning to the html

		else {

					document.getElementById('warning').innerHTML = "This is a word guessing game, letters only please...";
				}
				

			};



			startGame();
