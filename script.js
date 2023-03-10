var gradient = document.getElementById("gradient");
var border = document.querySelector(".border-gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var rgb1 = document.querySelector("#desc1");
var rgb2 = document.querySelector("#desc2");

setGradient();

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

	rgb1.textContent = gradient.style.background.slice(26).slice(0, -1);
	rgb2.textContent = gradient.style.background.slice(26).slice(0, -1);

	console.log("GRADIENT:", gradient.style.background);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);