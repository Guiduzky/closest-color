// Closest Color Calculator Scrìpt \\


//Valores de referencia
let red =     [255,   0,   0]; //
let orange =  [255, 128,   0]; //
let yellow =  [255, 255,   0]; //
let green =   [  0, 255,   0]; //
let cyan =    [  0, 255, 255]; //
let blue =    [  0,   0, 255]; //
let purple =  [128,   0, 255]; //
let magenta = [255,   0, 255]; //
let black =   [  0,   0,   0]; //
let white =   [255, 255, 255]; //

//Definir r como root
let r = document.querySelector(':root');

//Guardar en la variable "userHex" el código HEX que introdujo el usuario y guardar su longitud en "inputLength"
let inputHex = document.getElementById('input-hex').value;

//Poner el color del usuario en el div "user-color"
r.style.setProperty('--userColor', inputHex);

//Separar "inputHex" en RGB
let RedGB = inputHex.slice(1, 3);
let RGreenB = inputHex.slice(3, 5);
let RGBlue = inputHex.slice(5, 7);

//Buscar el color primario o secundario más cercano
let closestColor = getClosestColor(RedGB, RGreenB, RGBlue);
	
//Poner el color más cercano en el div "closest-color" y cambiar el texto "closest-text"
r.style.setProperty('--closestColor', closestColor);

//Cambiar el texto según el color más cercano
switch (closestColor) {
	case "#ffffff":
		r.style.setProperty('--textColor', "black");
		document.getElementById('closest-text').innerHTML = "White";
		break;
	case "#000000":
		r.style.setProperty('--textColor', "white");
		document.getElementById('closest-text').innerHTML = "Black";
		break;
	case "#ff0000":
		r.style.setProperty('--textColor', "black");
		document.getElementById('closest-text').innerHTML = "Red";
		break;
	case "#ff8000":
		r.style.setProperty('--textColor', "black");
		document.getElementById('closest-text').innerHTML = "Orange";
		break;
	case "#ffff00":
		r.style.setProperty('--textColor', "black");
		document.getElementById('closest-text').innerHTML = "Yellow";
		break;
	case "#00ff00":
		r.style.setProperty('--textColor', "black");
		document.getElementById('closest-text').innerHTML = "Green";
		break;
	case "#00ffff":
		r.style.setProperty('--textColor', "black");
		document.getElementById('closest-text').innerHTML = "Cyan";
		break;
	case "#0000ff":
		r.style.setProperty('--textColor', "black");
		document.getElementById('closest-text').innerHTML = "Blue";
		break;
	case "#8000ff":
		r.style.setProperty('--textColor', "black");
		document.getElementById('closest-text').innerHTML = "Purple";
		break;
	case "#ff00ff":
		r.style.setProperty('--textColor', "black");
		document.getElementById('closest-text').innerHTML = "Magenta";
		break;
}

//Si hacen click en el botón ejecutar todo lo otro
document.getElementById('button-check').onclick = function() {
	//Guardar en la variable "userHex" el código HEX que introdujo el usuario y guardar su longitud en "inputLength"
	inputHex = document.getElementById('input-hex').value;

	//Poner el color del usuario en el div "user-color"
	r.style.setProperty('--userColor', inputHex);

	//Separar "inputHex" en RGB
	RedGB = inputHex.slice(1, 3);
	RGreenB = inputHex.slice(3, 5);
	RGBlue = inputHex.slice(5, 7);

	//Buscar el color primario o secundario más cercano
	closestColor = getClosestColor(RedGB, RGreenB, RGBlue);
	
	//Poner el color más cercano en el div "closest-color"
	r.style.setProperty('--closestColor', closestColor);

	//Cambiar el texto según el color más cercano
	switch (closestColor) {
		case "#ffffff":
			r.style.setProperty('--textColor', "black");
			document.getElementById('closest-text').innerHTML = "White";
			break;
		case "#000000":
			r.style.setProperty('--textColor', "white");
			document.getElementById('closest-text').innerHTML = "Black";
			break;
		case "#ff0000":
			r.style.setProperty('--textColor', "black");
			document.getElementById('closest-text').innerHTML = "Red";
			break;
		case "#ff8000":
			r.style.setProperty('--textColor', "black");
			document.getElementById('closest-text').innerHTML = "Orange";
			break;
		case "#ffff00":
			r.style.setProperty('--textColor', "black");
			document.getElementById('closest-text').innerHTML = "Yellow";
			break;
		case "#00ff00":
			r.style.setProperty('--textColor', "black");
			document.getElementById('closest-text').innerHTML = "Green";
			break;
		case "#00ffff":
			r.style.setProperty('--textColor', "black");
			document.getElementById('closest-text').innerHTML = "Cyan";
			break;
		case "#0000ff":
			r.style.setProperty('--textColor', "white");
			document.getElementById('closest-text').innerHTML = "Blue";
			break;
		case "#8000ff":
			r.style.setProperty('--textColor', "black");
			document.getElementById('closest-text').innerHTML = "Purple";
			break;
		case "#ff00ff":
			r.style.setProperty('--textColor', "black");
			document.getElementById('closest-text').innerHTML = "Magenta";
			break;
	}
}

function getClosestColor(R, G, B) {
	//Pasamos los HEX a decimal
	let redDecimal = parseInt(R, 16);
	let greenDecimal = parseInt(G, 16);
	let blueDecimal = parseInt(B, 16);

	//Definimos variables
	let closestBlue;
	let closestGreen;
	let closestRed;

	console.log(blueDecimal);
	//Buscamos el valor de "closestBlue" más cercano
	if (blueDecimal >= 0 && blueDecimal < 128) {
		closestBlue = "00";
	} else if (blueDecimal >= 128 && blueDecimal <= 255) {
		closestBlue = "ff";
	}

	//Buscamos el valor de "closestGreen" según "closestBlue"
	if (closestBlue === "00") {
		if (greenDecimal >= 0 && greenDecimal < 64) {
			closestGreen = "00";
		} else if (greenDecimal >= 64 && greenDecimal < 128) {
			closestGreen = "80";
		} else if (greenDecimal >= 128 && greenDecimal < 192) {
			closestGreen = "80";
		} else if (greenDecimal >= 192 && greenDecimal <= 255) {
			closestGreen = "ff";
		}
	} else if (closestBlue === "ff") {
		if (greenDecimal >= 0 && greenDecimal < 128) {
			closestGreen = "00";
		} else if (greenDecimal >= 128 && greenDecimal <= 255) {
			closestGreen = "ff";
		}
	}

	//Buscamos el valor de "closestRed" según "closestGreen" y "closestBlue"
	if (closestBlue === "00" && closestGreen === "00") {
		if (redDecimal >= 0 && redDecimal < 128) {
			closestRed = "00";
		} else if (redDecimal >= 128 && redDecimal <= 255) {
			closestRed = "ff";
		}
	} else if (closestBlue === "00" && closestGreen === "80") {
		closestRed = "ff";
	} else if (closestBlue === "00" && closestGreen === "ff") {
		if (redDecimal >= 0 && redDecimal < 128) {
			closestRed = "00";
		} else if (redDecimal >= 128 && redDecimal <= 255) {
			closestRed = "ff";
		}
	} else if (closestBlue === "ff" && closestGreen === "ff") {
		if (redDecimal >= 0 && redDecimal < 128) {
			closestRed = "00";
		} else if (redDecimal >= 128 && redDecimal <= 255) {
			closestRed = "ff";
		}
	} else if (closestBlue === "ff" && closestGreen === "00") {
		if (redDecimal >= 0 && redDecimal < 64) {
			closestRed = "00";
		} else if (redDecimal >= 64 && redDecimal < 128) {
			closestRed = "80";
		} else if (redDecimal >= 128 && redDecimal < 192) {
			closestRed = "80";
		} else if (redDecimal >= 192 && redDecimal <= 255) {
			closestRed = "ff";
		}
	}

	//Unir los tres en un solo código HEX
	let closestColor = `#${closestRed}${closestGreen}${closestBlue}`;

	//Devolver el HEX final
	return closestColor;
}