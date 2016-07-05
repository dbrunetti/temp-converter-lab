// var degrees = prompt("What temperature is it outside?");
// var unit = prompt("Is that degrees F or C?");

function convertTemp() {
	var degrees = prompt("What temperature is it outside?");
	var unit = prompt("Is that degrees F or C?");
	var newTemp;
	if (unit==="F") {
		newTemp = Math.round((degrees - 32) *  (5 / 9));
		document.getElementById('temp-info').value = (degrees + " degrees Fahrenheit is the same as " + newTemp + " degrees Celsius!");
		if (newTemp < -20) {
		document.getElementById('advice').value = ("Spit goes 'clink'");
	} else if (newTemp < 0) {
		document.getElementById('advice').value =("It's cold out there!");
	} else if (newTemp < 10) {
		document.getElementById('advice').value =("Don't forget your jacket!");
	} else if (newTemp < 20) {
		document.getElementById('advice').value =("A lovely fall or spring day!");
	} else if (newTemp < 28) {
		document.getElementById('advice').value =("Nice and warm!");
	} else if (newTemp < 40) {
		document.getElementById('advice').value =("HOT HOT HOT");
	} else {
		document.getElementById('advice').value =("You died from the heat. Tough luck.")
	}

	} else if (unit==="C") {
		newTemp = Math.round((degrees * (9/5)) +32);
		document.getElementById('temp-info').value = (degrees + " degrees Celsius is the same as " + newTemp + " degrees Fahrenheit!");
	if (newTemp < -4) {
		document.getElementById('advice').value =("Spit goes 'clink'");
	} else if (newTemp < 32) {
		document.getElementById('advice').value =("It's cold out there!");
	} else if (newTemp < 50) {
		document.getElementById('advice').value =("Don't forget your jacket!");
	} else if (newTemp < 68) {
		document.getElementById('advice').value =("A lovely fall or spring day!");
	} else if (newTemp < 82) {
		document.getElementById('advice').value =("Nice and warm!");
	} else if (newTemp < 104) {
		document.getElementById('advice').value =("HOT HOT HOT");
	} else {
		document.getElementById('advice').value =("You died from the heat. Tough luck.")
	}
	} else {
		alert('Please type "C" or "F" or I cannot understand what you mean!');
		convertTemp();
	}
}