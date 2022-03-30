function conversionSwitch() {
	if (document.getElementById("myRadio1").checked == true) {
		fahrenheitToCelsius();
	}
	else if (document.getElementById("myRadio2").checked == true) {
		celsiusToFahrenheit();
	}
	else {
		document.getElementById("outputLabel").innerHTML = "";
	}
}

function fahrenheitToCelsius() {
  var x = document.getElementById("myFahrenheit").value;
  if (x != "") {
	  var y = (Number(x) - 32) * 5 / 9;
	  document.getElementById("outputLabel").innerHTML = "The temperature value in the above field equals to " + y.toString() + " degrees Celsius.";
  }
  else {
	  document.getElementById("outputLabel").innerHTML = "";	  
  }
  //document.getElementById("outputLabel").innerHTML = typeof x + " " + document.getElementById("myButton").autofocus;
}

function celsiusToFahrenheit() {
	var x = document.getElementById("myFahrenheit").value;
	if (x != "") {
		var y = Number(x) * 9 / 5 + 32;
		document.getElementById("outputLabel").innerHTML = "The temperature value in the above field equals to " + y.toString() + " degrees Fahrenheit.";
	}
	else {
		document.getElementById("outputLabel").innerHTML = "";
	}
}