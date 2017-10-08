var wins = 0;
var guessesLeft = 15;
var guess = []; 
var printCurrentWord = " ";

var computerChoices = ["apple", "apricot", "avocado", "banana",
"blackberry", "blueberry", "cherry", "coconut", "cranberry", "cucumber",
"date", "dragonfruit", "durian", "grape", "grapefruit", "jackfruit",
"kiwifruit", "lemon", "lime", "longan", "lychee", "mango", "melon", 
"olive", "orange", "mandarine", "peach", "pear", "plum", "pineapple", 
"pomegranate", "raspberry", "strawberry", "yuzu"];


// Randomly chooses a choice from the options array. This is the Computer's guess.
	var currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(currentWord);

	function mkCurrentHidden(currentWord) {
		var hiddenWord = "";

		for(var i=0; i<currentWord.length-1; i++) {
			hiddenWord = hiddenWord + "_ ";
		}
		hiddenWord = hiddenWord + "_";
		return hiddenWord;
	}

	printCurrentWord = mkCurrentHidden(currentWord);

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
	var key = event.which;
	// console.log(key);

	// If it is not a letter key, exit
	if (!(key>=65 && key<=90)) {
		return;
	}
	
	// Determines which key was pressed.
	var userGuess = event.key;

	//push userGuess to guess array 
	// guess.push(userGuess);
	if(guessesLeft != 0 && guess.indexOf(userGuess) == -1) {
		for(var j=0; j<currentWord.length; j++){
			if(userGuess.toLowerCase()==currentWord.charAt(j)) {
				// guessesLeft--;
				var splitCurrentWord = printCurrentWord.split(" ");

				splitCurrentWord[j] = userGuess.toLowerCase();
				printCurrentWord = splitCurrentWord.join(" ");
				// printCurrentWord.charAt(j) = userGuess.toLowerCase();
				// console.log("test " + printCurrentWord.charAt(j));
			}
		}

		guessesLeft--;
		guess.push(userGuess);
	} 
	else if(guessesLeft != 0 && guess.indexOf(userGuess) != -1) {
		
	}

	else {
		guessesLeft = 15;
		guess = [];
		currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];		
		printCurrentWord = mkCurrentHidden(currentWord);
		
	}

	if(printCurrentWord.replace(/\s/g, '') == currentWord) {
		currentWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		guessesLeft = 15;
		guess = [];
		wins++;
		printCurrentWord = mkCurrentHidden(currentWord);
		
		// html = html + '<img src="../img/"' + currentWord + '.jpg></img>';
	}

	// var img = new Image();
	// var div = document.getElementById(currentWord);

	// if(currentWord = "mango") {
	// 	div.appendChild(img);
	// }

	// img.src = "../img/" + currentWord + ".jpg";

	// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
	var html =
	"<p>WINS: " + wins + "</p>" +
	"<p>CURRENT WORD: " + printCurrentWord + "</p>" +
	"<p>NUMBER OF GUESSES REMAINING: " + guessesLeft 
	+ "</p>" +
	"<p>LETTERS ALREDY GUESSED: " + guess + "</p>";

	// Set the inner HTML contents of the #game div to our html string
	document.querySelector("#banner").innerHTML = html;
}
