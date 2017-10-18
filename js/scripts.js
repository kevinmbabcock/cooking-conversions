var convertCToF = function(temp) {
  return ((temp * 1.8) + 32).toFixed(2);
}

 var convertFToC = function(temp) {
   return (((temp - 32) * 5) / 9).toFixed(2);
}

var convertLiterToGallon = function(liter) {
   return (liter * 0.264172).toFixed(2);
}

var convertGallonToLiter = function(gallon) {
  return (gallon * 3.785412).toFixed(2);
}

$(document).ready(function() {
  $("form#celsiusToFair").submit(function(event) {
    event.preventDefault();
    var userInput = $("#cToF").val();
    var value = convertCToF(userInput);
    $("#displayFair").text(value);
  });
  $("form#fairToCelsius").submit(function(event) {
    event.preventDefault();
    var userInput = $("#fToC").val();
    var value = convertFToC(userInput);
    $("#displayCelsius").text(value);
  });
  $("form#literToGallon").submit(function(event) {
    event.preventDefault();
    var userInput = $("#lToG").val();
    var value = convertLiterToGallon(userInput);
    $("#displayGallon").text(value);
  })
  $("form#gallonToLiter").submit(function(event) {
    event.preventDefault();
    var userInput = $("#gToL").val();
    var value = convertGallonToLiter(userInput);
    $("#displayLiter").text(value);
  })
})
