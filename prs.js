function check(){
	
	var playerOne;
	var playerTwo;
	playerOne=prompt("Player One choose: paper, rock, scissors");
	playerTwo=prompt("Player Two choose: paper, rock, scissors");
	
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
}

	

