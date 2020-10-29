// Defining Variables //
var number = "0123456789".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
var passwordArray = [];

var greetings = alert("Let's get you a password shall we?");

//===================

function generatePassword() {
  var lengthQ = prompt("How long would you like your password to be?");
    if (lengthQ < 8 || lengthQ > 128 || isNaN(lengthQ)) {
      alert ("Oh no! Please pick a number between 8 - 128 and we'll try this again!");
      return
    }

  var numberQ = confirm("Would you like your password to include Numbers?");
    if (numberQ) {
      passwordArray = passwordArray.concat(number);
    }
  var lowerQ = confirm("Would you like your password to include Lowercase Letters?");
    if (lowerQ) {
      passwordArray = passwordArray.concat(number);
    }
  var upperQ = confirm("Would you like your password to include Uppercase Letters?");
    if (upperQ) {
      passwordArray = passwordArray.concat(number);
    }
  var specialQ = confirm("Would you like your password to include Special Characters?"); 
    if (specialQ) {
      passwordArray = passwordArray.concat(number);
    }
}




//  else if 
//   (numberQ !== true && lowerQ !== true && upperQ !== true && specialQ !== true) {
//   alert ("Oops! Let's try that again. Please be sure to pick an option!")

// } 
  

// 2.
//===================

// function optionsStore () {
//   for (var i = 0; i < lengthQ; i++) {
//     var randomNumber = Math.floor(Math.random());
//     if (numberQ === true || lowerQ === true || upperQ === true || specialQ === true)
//     console.log (randomNumber);
//   }
// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);