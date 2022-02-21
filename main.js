//--- Reference Values ---\\
let red 		= "rgb(255,   0,   0)";
let orange 		= "rgb(255, 128,   0)";
let yellow 		= "rgb(255, 255,   0)";
let green 		= "rgb(  0, 255,   0)";
let darkGreen 	= "rgb(  0, 128,   0)";
let cyan 		= "rgb(  0, 255, 255)";
let blue 		= "rgb(  0,   0, 255)";
let purple 		= "rgb(128,   0, 255)";
let magenta		= "rgb(255,   0, 255)";
let black		= "rgb(  0,   0,   0)";
let white 		= "rgb(255, 255, 255)";
//  color 		= "rgb(RRR, GGG, BBB)";



//Define r as root
let r = document.querySelector(':root');

runPage();

//This will start the loop for the rainbow title
window.requestAnimationFrame(loop);

//Once the button get clicked run the page again
document.getElementById('button-check').onclick = function() {
	runPage();
}

//If the enter key is pressed run the page again
document.addEventListener('keydown', function(e) {
	if (e.key === "Enter") runPage();
}, false);


function runPage() {
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

	//Get closest colors
	let closestBlue = getClosestBlue(blueDecimal);
	let closestGreen = getClosestGreen(greenDecimal, closestBlue);
	let closestRed = getClosestRed(redDecimal, closestBlue, closestGreen);

	//Join the 3 numbers in one hex color code
	let closestColor = `#${closestRed}${closestGreen}${closestBlue}`;

	let textColor = changeText(closestColor).color;
	let text = changeText(closestColor).text;

	//Return all the needed to display the closest color
	return [closestColor, textColor, text];
}

function getClosestBlue(blueDecimal) {
	let closestBlue;

	//Search the closest pure value to blueDecimal
		//Blue only has 2 possible values (see Reference Values)
	if (blueDecimal >= 0 && blueDecimal < 128) {
		//0
		closestBlue = "00";
	} else if (blueDecimal >= 128 && blueDecimal <= 255) {
		//or 255
		closestBlue = "ff";
	}

	return closestBlue;
}

function getClosestGreen(greenDecimal, closestBlue) {
	let closestGreen;

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

	return closestGreen;
}

function getClosestRed(redDecimal, closestBlue, closestGreen) {
	let closestRed;

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

	return closestRed;
}

function changeText(closestColor) {
	let textColor = "black";
	let text = "none";

	//Change the text and the text color according to the closest color
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

	return {
		color: textColor,
		text: text
	};
}

//Loop
let lastRenderTime = 0;
const FPS = 10;

let colorPos = 1;

function loop(currentTime) {
	//Request the browser to render a frame
	window.requestAnimationFrame(loop);
  
	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

	//If the browser tries to render a frame faster than the fps const abort frame renderization
	if (secondsSinceLastRender < 1 / FPS) return;

	lastRenderTime = currentTime;

	updateRainbowTitle();
}

function updateRainbowTitle() {
	if (colorPos <= 22) {
		changeColors(colorPos);
		colorPos++;
	} else colorPos = 1;
}

function changeColors(colorPos) {
	let j = 21;

	r.style.setProperty("--" + colorPos + "color", red);

	for (let i = 1; i <= 21; i++) {
		let color = getColor(j);

		let pos = colorPos + j;

		if (pos > 22) pos -= 22;

		r.style.setProperty("--" + pos + "color", color);

		j--;
	}
}

function getColor(j) {
	let color;

	if (j === 21) {
		color = "#ff00a0";
	} else if (j === 20) {
		color = "#ff00f0";
	} else if (j === 19) {
		color = "#ff00ff";
	} else if (j === 18) {
		color = "#af00ff";
	} else if (j === 17) {
		color = "#8500ff";
	} else if (j === 16) {
		color = "#5f00ff";
	} else if (j === 15) {
		color = "#0000ff";
	} else if (j === 14) {
		color = "#0050ff";
	} else if (j === 13) {
		color = "#00a0ff";
	} else if (j === 12) {
		color = "#00f0ff";
	} else if (j === 11) {
		color = "#00ffff";
	} else if (j === 10) {
		color = "#00fff0";
	} else if (j === 9 ) {
		color = "#00ffa0";
	} else if (j === 8 ) {
		color = "#00ff68";
	} else if (j === 7 ) {
		color = "#00ff00";
	} else if (j === 6 ) {
		color = "#5fff00";
	} else if (j === 5 ) {
		color = "#afff00";
	} else if (j === 4 ) {
		color = "#ffff00";
	} else if (j === 3 ) {
		color = "#ffc200";
	} else if (j === 2 ) {
		color = "#ffa000";
	} else color = "#ff5000";

	return color;
}