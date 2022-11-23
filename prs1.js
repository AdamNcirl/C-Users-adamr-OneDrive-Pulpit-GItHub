function check(){
	
	var playerOne;
	var playerTwo;
	
	for(i=0;i<=2;i++){
	playerOne=prompt("Player One choose: paper, rock, scissors");
	playerTwo=prompt("Player Two choose: paper, rock, scissors");
	}
	if (playerOne === playerTwo) { 
	alert("Tie game!"); 
    }
	else if (playerOne === "rock" && playerTwo === "scissors") 
	{ alert("Player One won!"); }
    else if (playerOne === "paper" && playerTwo === "rock") 
	{ alert("Player One won!"); }
    else if (playerOne === "scissors" && playerTwo === "paper") 
	{ alert("Player One won!"); }

	else if (playerTwo === "rock" && playerOne === "scissors") 
	{ alert("Player Two won!"); }
    else if (playerTwo === "paper" && playerOne === "rock") 
	{ alert("Player Two won!"); }
    else if (playerTwo === "scissors" && playerOne === "paper") 
	{ alert("Player Two won!"); }



function print{
var word = "bottles";
var div = document.getElementById('tmp');

for (var count = 99; count > 0; --count) {
    div = document.getElementById('tmp');
    div.innerHTML = div.innerHTML + count + " " + word + " of beer on the wall<br>";
    div.innerHTML = div.innerHTML + count + " " + word + " of beer,<br>";
    div.innerHTML = div.innerHTML + "Take one down, pass it around,<br>";
}

div.innerHTML = div.innerHTML + "No more " + word + " of beer on the wall.";

}