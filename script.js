var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

setGradient();

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = "Colors: " + body.style.background.slice(26).slice(0, -1);
	console.log("LOG:", css.textContent);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);