// // Defining Variables 
// var numbers = "0123456789".split("");
// var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// var sc = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

// // Defining Alerts, Prompts & Confirms
// var greetings = alert ("Let's get you a password shall we?")


// // Conditions
// function initial () {
//   var lengthQuest = prompt ("How long would you like your password to be?")
//   if (lengthQuest < 8 || lengthQuest > 128 || isNaN(lengthQuest)) {
//     alert ("You must pick a number between 8 - 128!")
//   return
//   }

//   var numQuest = confirm ("Would you like your password to include Numbers?");
//   var lowQuest = confirm ("Would you like your password to include Lowercase Letters?");
//   var upQuest = confirm ("Would you like your password to include Uppercase Letters?");
//   var scQuest = confirm ("Would you like your password to include Special Characters?");
// }

// -------------------------------------------

// Defining Variables //
var number = "0123456789".split("");
var lower = "abcdefghijklmnopqrstuvwxyz".split("");
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

var greetings = alert("Let's get you a password shall we?");

// Defining Alerts, Prompts & Confirms
// store these in conditionals for password options function

// 1.
//===================

function passwordOptions() {
  var lengthQ = prompt("How long would you like your password to be?");
  var numberQ = confirm("Would you like your password to include Numbers?");
  var lowerQ = confirm("Would you like your password to include Lowercase Letters?");
  var upperQ = confirm("Would you like your password to include Uppercase Letters?");
  var specialQ = confirm("Would you like your password to include Special Characters?"); 

    if (lengthQ < 8 || lengthQ > 128 || isNaN(lengthQ)) {
      alert ("Oh no! Please pick a number between 8 - 128 and we'll try this again!")

    } else if 
      (numberQ !== true && lowerQ !== true && upperQ !== true && specialQ !== true) {
      alert ("Oops! Let's try that again. Please be sure to pick an option!")

    } 

// 2.
//===================

function optionsStore () {
  for (var i = 0; i < lengthQ; i++) {
    var randomNumber = Math.floor(Math.random(numberQ + lowerQ + upperQ + specialQ)) + 1;
    if (numberQ === true || lowerQ === true || upperQ === true || specialQ === true)
    console.log (randomNumber);
  }
}


// 3.
//===================
var generateNumber = number * numberQ;
var generateLower = lower * lowerQ;
var generateUpper = upper * upperQ;
var generateSpecial = special * specialQ;

// bring in your options that you had from passwordOptions() and store them in a variable
// function generatingPassword(){
// var optionsStore = passwordOptions()
// you would be calling your random() here and passing in the vars for the split arrays at the top of this file
// based off conditionals that you're storing from your prompts and confirmations in the passwordOptions()
// basically you need to create if conditionals for whether a prompt or conformation is true or false when coming from user
// }
//===================

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
}


// -------------------------------------------

// SHANI'S CODE //

// let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
// let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// let specialChar = "!@#$%^&*()".split("");
// let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function getPasswordOptions() {
//   let passwordLength = prompt("How long would you like your password to be?")
//   if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
//     alert("Must select a number between 8 and 128. Try again!")
//     return
//   }
//   let wantsLower = confirm("Do you want to include lower case letters?");
//   let wantsUpper = confirm("Do you want to include upper case letters?");
//   let wantsSpecial = confirm("Do you want to include special characters?");
//   let wantsNumber = confirm("Do you want to include numbers?");
//   if (wantsLower === false && wantsUpper === false && wantsSpecial === false && wantsNumber === false) {
//     alert("Please select at least one option.")
//     return
//   }
//   let criteria = {
//     length: passwordLength,
//     lower: wantsLower,
//     upper: wantsUpper,
//     special: wantsSpecial,
//     number: wantsNumber
//   }
//    return criteria
// }

//  -----------------------------

