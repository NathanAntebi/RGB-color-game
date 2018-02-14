var numSquares=6;
var colors = generateColors(numSquares);
var colorSpan = document.querySelector(".color");
var goalColor = randomColor();
var winOrLoseDisplay= document.querySelector(".winOrLose");
var h1 = document.querySelector("h1");
var playAgainButton = document.querySelector(".playAgain");
var easyButton = document.querySelector("#easy-button");
var hardButton = document.querySelector("#hard-button");


easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares=3;
	colors=generateColors(numSquares);
	goalColor=randomColor();
	colorSpan.textContent=goalColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
})

hardButton.addEventListener("click", function(){
	hardButton.classList.toggle("selected");
	easyButton.classList.toggle("selected");
	numSquares =6;
	colors=generateColors(numSquares);
	goalColor=randomColor();
	colorSpan.textContent=goalColor;
	for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		
	}
	
})


var squares = document.querySelectorAll(".square");
colorSpan.textContent = goalColor;

console.log(squares);

play();
playAgainButton.addEventListener("click", function(){
	playAgainButton.textContent="reset";
	h1.style.background="steelblue"
	winOrLoseDisplay.textContent =" ";
	colors = generateColors(numSquares);
	goalColor = randomColor();
	colorSpan.textContent=goalColor;
	for(var i =0; i<colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
});

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function randomColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateColors(num){
	var arr = [];

	for(var i=0; i<num; i++){
		arr.push(pickColor());
	}



	return arr
}

function pickColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r +", " + g +", " + b + ")";
}

function play(){
	h1.style.background="steelblue";
	for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];


	squares[i].addEventListener("click", function(){
		var pickedColor = this.style.backgroundColor;
		if(pickedColor==goalColor){
			winOrLoseDisplay.textContent = "Winner";
			playAgainButton.textContent="Play again?";
			changeColors(pickedColor);
			h1.style.backgroundColor=goalColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			winOrLoseDisplay.textContent = "Try again!";
		}
		

});
}
}


