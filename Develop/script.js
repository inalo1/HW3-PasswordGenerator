// Defining Variables //
var numbers = "0123456789".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var sChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");


// Defining Alerts, Prompts & Confirms
var greet = alert ("Let's get you a password shall we?");
var Q = prompt ("How long would you like your password to be?");
var numQuest = confirm ("Would you like your password to include Numbers?");
var lowQuest = confirm ("Would you like your password to include Lowercase Letters?");
var UpQuest = confirm ("Would you like your password to include Uppercase Letters?");
var scQuest = confirm ("Would you like your password to include Special Characters?");











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
