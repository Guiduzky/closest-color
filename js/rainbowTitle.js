//Import variables
import {r} from "./main.js";

//Loop
let lastRenderTime = 0;
const FPS = 10;

let colorPos = 1;

export function loop(currentTime) {
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
	} else {
		colorPos = 1;
		changeColors(colorPos);
	}
}

function changeColors(colorPos) {
	let j = 21;

	//Change the first character
	r.style.setProperty("--" + colorPos + "color", "#ff0000");

	//Change the other 21
	for (let i = 1; i <= 21; i++) {
		let color = getColor(j);

		let pos = colorPos + j;

		//When the position gets to the end, start with 1 again
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