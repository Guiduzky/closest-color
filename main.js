// Closest Color Calculator Scrìpt \\


//Valores de referencia
let red = [255, 0, 0];
let orange = [255, 128, 0];
let yellow = [255, 255, 0];
let green = [0, 255, 0];
let cyan = [0, 255, 255];
let blue = [0, 0, 255];
let purple = [128, 0, 255];
let magenta = [255, 0, 255];
let black = [0, 0, 0];
let white = [255, 255, 255];

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

}

function getClosestColor(R, G, B) {
	//Conseguir los números de colores más cercanos
	let closestRed = getClosestRed(R);
	let closestGreen = getClosestGreen(G);
	let closestBlue = getClosestBlue(B);

	//Unir los tres en un solo código HEX
	let closestColor = `#${closestRed}${closestGreen}${closestBlue}`;

	//Devolver el HEX final
	return closestColor;
}

function getClosestBlue(Blue) {
	//Convertimos Blue a decimal
	let blueDecimal = parseInt(Blue, 16);

	if (blueDecimal >= 0 && blueDecimal <= 128) {
		return "00";
	} else if (blueDecimal > 128 && blueDecimal <= 255) {
		return "ff";
	}
}

function getClosestGreen(Green) {
	//Convertimos Green a decimal
	let greenDecimal = parseInt(Green, 16);

	if (greenDecimal >= 0 && greenDecimal < 64) {
		return "00";
	} else if (greenDecimal > 64 && greenDecimal <= 128) {
		return "80";
	} else if (greenDecimal > 128 && greenDecimal <= 192) {
		return "80";
	} else if (greenDecimal > 192 && greenDecimal <= 255) {
		return "ff";
	}
}

function getClosestRed(Red) {
	//Convertimos Red a decimal
	let redDecimal = parseInt(Red, 16);

	if (redDecimal >= 0 && redDecimal < 64) {
		return "00";
	} else if (redDecimal > 64 && redDecimal <= 128) {
		return "80";
	} else if (redDecimal > 128 && redDecimal <= 192) {
		return "ff";
	} else if (redDecimal > 192 && redDecimal <= 255) {
		return "ff";
	}
}