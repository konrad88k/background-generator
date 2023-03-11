const gradient = document.getElementById("gradient");
const border = document.querySelector(".border-gradient");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const rgb1 = document.querySelector("#rgb1");
const rgb2 = document.querySelector("#rgb2");
const hex1 = document.querySelector("#hex1");
const hex2 = document.querySelector("#hex2");

function rgbToHex(rgb) {

	let R = Number(rgb.textContent.split(",")[0].slice(1)).toString(16);
	if (R.length === 1) R = "0" + R;
	console.log("RR: ", R);
	let G = Number(rgb.textContent.split(",")[1]).toString(16);
	if (G.length === 1) G = "0" + G;
	console.log("GG: ", G);
	let B = Number(rgb.textContent.split(",")[2].slice(1).slice(0, -1)).toString(16);
	if (B.length === 1) B = "0" + B;
	console.log("BB: ", B);
	let output = "#" + R + G + B;
	console.log("output: ", output);
	return output;
}

function setGradient() {
	gradient.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	border.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	rgb1.textContent = "("
		+ gradient.style.background.split(",")[1].slice(5)
		+ ", " + gradient.style.background.split(",")[2].slice(1)
		+ ", " + gradient.style.background.split(",")[3].slice(1);

	rgb2.textContent = "("
		+ gradient.style.background.split(",")[4].slice(5)
		+ ", " + gradient.style.background.split(",")[5].slice(1)
		+ ", " + gradient.style.background.split(",")[6].slice(1).slice(0, -1);

	hex1.textContent = rgbToHex(rgb1);
	hex2.textContent = rgbToHex(rgb2);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

setGradient();
