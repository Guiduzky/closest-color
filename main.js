//--- Reference Values ---\\
let red 		= [255,   0,   0];
let orange 		= [255, 128,   0];
let yellow 		= [255, 255,   0];
let green 		= [  0, 255,   0];
let darkGreen 	= [  0, 128,   0];
let cyan 		= [  0, 255, 255];
let blue 		= [  0,   0, 255];
let purple 		= [128,   0, 255];
let magenta		= [255,   0, 255];
let black		= [  0,   0,   0];
let white 		= [255, 255, 255];
//  color 		= [RRR, GGG, BBB];



//Define r as root
let r = document.querySelector(':root');


//Get the user input and store it in inputHex
let inputHex = document.getElementById('input-hex').value;

//Put the user hex color in the --userColor CSS variable (user's color box)
r.style.setProperty('--userColor', inputHex);

//Splite inputHex in RGB hex values
let RedGB = inputHex.slice(1, 3);
let RGreenB = inputHex.slice(3, 5);
let RGBlue = inputHex.slice(5, 7);

//Get the closest pure color to the user color
let closestColor = getClosestColor(RedGB, RGreenB, RGBlue)[0];

//Put closestColor in the --closestColor CSS variable (closest color box)
r.style.setProperty('--closestColor', closestColor);

//Set the text color according to the closest color
r.style.setProperty('--textColor', getClosestColor(RedGB, RGreenB, RGBlue)[1]);

//Set the text according to the closest color
document.getElementById('closest-text').innerText = getClosestColor(RedGB, RGreenB, RGBlue)[2];



//Once the button get clicked execute all again
document.getElementById('button-check').onclick = function() {
	//Get the user input and store it in inputHex
	let inputHex = document.getElementById('input-hex').value;

	//Put the user hex color in the --userColor CSS variable (user's color box)
	r.style.setProperty('--userColor', inputHex);

	//Splite inputHex in RGB hex values
	let RedGB = inputHex.slice(1, 3);
	let RGreenB = inputHex.slice(3, 5);
	let RGBlue = inputHex.slice(5, 7);

	//Get the closest pure color to the user color
	let closestColor = getClosestColor(RedGB, RGreenB, RGBlue)[0];

	//Put closestColor in the --closestColor CSS variable (closest color box)
	r.style.setProperty('--closestColor', closestColor);

	//Set the text color according to the closest color
	r.style.setProperty('--textColor', getClosestColor(RedGB, RGreenB, RGBlue)[1]);

	//Set the text according to the closest color
	document.getElementById('closest-text').innerText = getClosestColor(RedGB, RGreenB, RGBlue)[2];
}




function getClosestColor(R, G, B) {
	//Convert the hex numbers into decimal numbers
	let redDecimal = parseInt(R, 16);
	let greenDecimal = parseInt(G, 16);
	let blueDecimal = parseInt(B, 16);

	//Define variables
	let closestBlue;
	let closestGreen;
	let closestRed;
	let textColor = "black";
	let text = "none";
	let borderColor = "white";
	
	//Search the closest pure value to blueDecimal
		//Blue only has 2 possible values (see Reference Values)
	if (blueDecimal >= 0 && blueDecimal < 128) {
		//0
		closestBlue = "00";
	} else if (blueDecimal >= 128 && blueDecimal <= 255) {
		//or 255
		closestBlue = "ff";
	}

	
	//Search the closest pure value to greenDecimal

	//If closestBlue is 0 then
	if (closestBlue === "00") {
			//Green has 3 possible values
		if (greenDecimal >= 0 && greenDecimal < 64) {
			//0
			closestGreen = "00";
		} else if (greenDecimal >= 64 && greenDecimal < 128) {
			//128
			closestGreen = "80";
		} else if (greenDecimal >= 128 && greenDecimal < 192) {
			//128
			closestGreen = "80";
		} else if (greenDecimal >= 192 && greenDecimal <= 255) {
			//or 255
			closestGreen = "ff";
		}
	//If closestBlue is 0 then
	} else if (closestBlue === "ff") {
			//Green has 2 possible values
		if (greenDecimal >= 0 && greenDecimal < 128) {
			//0
			closestGreen = "00";
		} else if (greenDecimal >= 128 && greenDecimal <= 255) {
			//or 255
			closestGreen = "ff";
		}
	}

	
	//Search the closest pure value to redDecimal

	//If closestBlue is 0 and closestGreen is also 0 then
	if (closestBlue === "00" && closestGreen === "00") {
			//Red has 2 possible values
		if (redDecimal >= 0 && redDecimal < 128) {
			//0
			closestRed = "00";
		} else if (redDecimal >= 128 && redDecimal <= 255) {
			//or 255
			closestRed = "ff";
		}
	//If closestBlue is 0 and closestGreen is 128 then
	} else if (closestBlue === "00" && closestGreen === "80") {
			//Red has 2 possible values
		if (redDecimal >= 0 && redDecimal < 128) {
			//0
			closestRed = "00";
		} else if (redDecimal >= 128 && redDecimal <= 255) {
			//or 255
			closestRed = "ff";
		}
	//If closestBlue is 0 and closestGreen is 255 then
	} else if (closestBlue === "00" && closestGreen === "ff") {
			//Red has 2 possible values
		if (redDecimal >= 0 && redDecimal < 128) {
			//0
			closestRed = "00";
		} else if (redDecimal >= 128 && redDecimal <= 255) {
			//or 255
			closestRed = "ff";
		}
	//If closestBlue is 255 and closestGreen is 0 then
	} else if (closestBlue === "ff" && closestGreen === "00") {
			//Red has 3 possible values
		if (redDecimal >= 0 && redDecimal < 64) {
			//0
			closestRed = "00";
		} else if (redDecimal >= 64 && redDecimal < 128) {
			//128
			closestRed = "80";
		} else if (redDecimal >= 128 && redDecimal < 192) {
			//128
			closestRed = "80";
		} else if (redDecimal >= 192 && redDecimal <= 255) {
			//or 255
			closestRed = "ff";
		}
	//If closestBlue is 255 and closestGreen is also 255 then
	} else if (closestBlue === "ff" && closestGreen === "ff") {
			//Red has 2 possible values
		if (redDecimal >= 0 && redDecimal < 128) {
			//0
			closestRed = "00";
		} else if (redDecimal >= 128 && redDecimal <= 255) {
			//or 255
			closestRed = "ff";
		}
	}

	//Join the 3 numbers in one hex color code
	let closestColor = `#${closestRed}${closestGreen}${closestBlue}`;

	//Change the text, the text color and the border color according to the closest color
	switch (closestColor) {
			//If it's white
		case "#ffffff":
			textColor = "black";
			text = "White";
			break;
			//If it's black
		case "#000000":
			textColor = "white";
			text = "Black";
			break;
			//If it's red
		case "#ff0000":
			textColor = "white";
			text = "Red";
			break;
			//If it's orange
		case "#ff8000":
			textColor = "black";
			text = "Orange";
			break;
			//If it's yellow
		case "#ffff00":
			textColor = "black";
			text = "Yellow";
			break;
			//If it's green
		case "#00ff00":
			textColor = "black";
			text = "Green";
			break;
			//If it's dark green
		case "#008000":
			textColor = "black";
			text = "Dark Green";
			break;
			//If it's cyan
		case "#00ffff":
			textColor = "black";
			text = "Cyan";
			break;
			//If it's blue
		case "#0000ff":
			textColor = "white";
			text = "Blue";
			break;
			//If it's purple
		case "#8000ff":
			textColor = "white";
			text = "Purple";
			break;
			//If it's magenta
		case "#ff00ff":
			textColor = "black";
			text = "Magenta";
			break;
	}

	//Return all the needed to display the closest color
	return [closestColor, textColor, text];
}
