'use strict';

var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');  // To select the main heading 'The Great rgb Game..'--> To change the background color of h1.
var resetButton = document.querySelector('button');
var pickedColor = pickColor();    //pickColor() is the function which is returning colors[random]
var easyButton = document.getElementById('easy');
var hardButton = document.getElementById('hard');


colorDisplay.textContent = pickedColor;

easyButton.addEventListener('click',function(){
	hardButton.classList.remove('selected');
	easyButton.classList.add('selected');
	numOfSquares = 3;
	//generate 3 random colors
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from colors array
	pickedColor = pickColor();
	//change colorDisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	//change the colors of squares
	for(var i= 0 ; i<squares.length; i++)
	{
		if(colors[i])     //If there is a color in colors array then do this. There are only 3 colors in colors array.
		{				  //There are 6 squares and 3 colors so until we have colors , 'if' part will work and then 'else' part will run.
			squares[i].style.backgroundColor = colors[i];
		}
		else           // In this, we will hide the next 3 squares 
		{
			squares[i].style.display = 'none';
		}
	}
	
});

hardButton.addEventListener('click',function(){
	easyButton.classList.remove('selected');
	hardButton.classList.add('selected');
	numOfSquares = 6;
	//generate 6 random colors
	colors = generateRandomColors(numOfSquares);
	//pick a new random color from colors array
	pickedColor = pickColor();
	//change colorDisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	//change the colors of squares
	for(var i= 0 ; i<squares.length; i++)
	{
		if(colors[i])     //If there is a color in colors array then do this. There are 6 colors in colors array.
		{				  //There are 6 squares and 6 colors so until we have colors , 'if' part will work and then 'else' part will run.
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = 'block';   //This make the hidden squares visible. 
		}
	}
});

resetButton.addEventListener('click', function(){
	
	//generate all new colors 
	colors = generateRandomColors(numOfSquares);    //We are generating 6 colors because we want the game to start wil HARD level by default.
	//pick a new random color from colors array
	pickedColor = pickColor(); 
	//change colorDisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	//change this button's textContent to 'NEW COLORS'. This is because after we won this button's text changed to Play Again.
	resetButton.textContent = 'NEW COLORS';
	//remove 'Correct' and 'Try Again' when we start a new game.
	messageDisplay.textContent = ''; 
	//change h1 color to #232323 because a new game is starting.
	h1.style.backgroundColor = 'steelblue';
	//change colors of squares 
	for(var i= 0 ; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}

});

for(var i = 0; i<squares.length; i++)           //To add colors to the squares
{
	//To add initial colors to the squares
	squares[i].style.backgroundColor = colors[i];
	/*if(i == colors.length)
	{
		i = 0;
	}*/

	//Add click listener to each square
	squares[i].addEventListener('click',function(){
		//Grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		//compare clickedColor with pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor)
		{
			//alert("Correct");
			messageDisplay.textContent = "Correct";
			resetButton.textContent = 'Play Again!';
			for(var j=0;j<squares.length;j++)
			{
				squares[j].style.backgroundColor = clickedColor;
				h1.style.backgroundColor = clickedColor;
				
			}
			
		}
		else
		{
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}

	});
	
}

/*This function will randomly select a color from colors array by doing 2 things :
1. Generate a random number. variable random.
2. Return colors[random]. Pass that number to colors array to choose a random color. 
for example- if random number generated = 3 then colors[random] will be done which means colors[3] which will give
us the 4th element of colors array. [when we hard coded this code, at that time colors[3] = rgb(0, 255, 0)]
How does Math.random work?
Math.random() will generate random numbers like 0.632922020292 , 0.98237282922, 0.92873339222 ..... This doesn't count 1.
So if we need numbers between 1 and 6 then Math.random * 7 will give random values max till 6.99999 
Since we need the value(whole number) only between 1-6 so we will chop off the decimal part by using Math.floor 
*/
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times 
	for(var i = 0; i<num; i++)
	{
		arr.push(randomColor())
	}
	//return array
	return arr;
}

function randomColor()
{
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
