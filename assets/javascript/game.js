


// set variables

var wordArray = ["Pineapple", "Uzbekistan", "Candidate", "Tropical", "Competence", "Leftovers", "Overwhelm", "Psychology", "Conversation", "Broadcast"];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var underScores = [];
var wrongLetter = [];
var guessesLeft = 7;



// Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        // var userInput = String.fromCharCode(event.keyCode).toLowerCase();


        // check that guess is only letters.  No numbers or special characters allwerd.



        // if (userInput === "a" || userInput === "b" userInput === "c" || userInput === "d" || userInput === "e" || userInput === "f" 
        // || userInput === "g" || userInput === "h" || userInput === "i" || userInput === "j" || userInput === "k" 
        // || userInput === "l" || userInput === "m" || userInput === "n" || userInput === "o" || userInput === "p" 
        // || userInput === "q" || userInput === "r" || userInput === "s" || userInput === "t" || userInput === "u" 
        // || userInput === "v" || userInput === "w" || userInput === "x" || userInput === "y" || userInput === "z")

        		//chooses a random word from the wordArray and then pushes the number of underscores to underscores var

   				function startGame () {

        		    for (var i = 0; i < randomWord.length; i++)
				{
					underScores[i] = "_";
				}
				//sending correct number of underscores to the 

				spaces = underScores.join(" ");
				document.getElementById('blankWord').innerHTML = spaces;


			}


			startGame();
