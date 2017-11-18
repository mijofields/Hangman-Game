
// set variables

var wordArray = ["pineapple", "gratification", "candidate", "tropical", "competence", "leftovers", "overwhelm", "psychology", "conversation", "broadcast"];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var underScores = [];
var wrongLetter = [];
var guessesLeft = 8;
var lettersUsed = [];
var correctLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   				

   				function startGame () {

   					console.log(randomWord);
   					$("#warning").text(""); 

   					underScores = [];
   					wrongLetter = [];
   					guessesLeft = 8;
   					lettersUsed=[];
					var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
					$("#letterbin").text("");
					

        		    for (var i = 0; i < randomWord.length; i++)
				{
					underScores[i] = "_";
				}
				//sending correct number of underscores to the game

				spaces = underScores.join(" ");
				console.log(spaces);
				$("#blankWord").text(spaces);
				$("#guessesLeft").text(guessesLeft);


			} //end of startgame function
 

				document.onkeyup = function(event) {

				var userInput = String.fromCharCode(event.keyCode).toLowerCase();
				var wordCheck = randomWord.indexOf(userInput);
				console.log("word check " + wordCheck);



        if (correctLetters.indexOf(userInput)===-1) {


        		$("#warning").text("This is a word guessing game, letters only please...");


        }



          		else if (wordCheck ===-1 && lettersUsed.indexOf(userInput)===-1){

          			$("#warning").text("");



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

							document.getElementById('warning').innerHTML = "Careful now....";
						}






          		}//end of else if


          		else {

          			$("#warning").text("");

          			for (var i =0; i < randomWord.length; i++){

					if(userInput===randomWord[i]){

					lettersUsed.push(userInput);
          			lettersUsed = $.unique(lettersUsed);
          			console.log("letters used " + lettersUsed);

					underScores.splice([i],1,userInput);	
					spaces = underScores.join(" ");					
					$("#blankWord").text(spaces);
					console.log(underScores + " underscores");



          		}






          		};






          	}

}

;





		$(".start").on("click", function(){ startGame(); });

          		



