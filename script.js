// Arrays of choices
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
                        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
                        "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["/", "&", ".", "@","!","~", "-", "*", "%", ">", "+", ",", "<", "?"];

var confirmLength = "";
var upperCase;
var lowerCase;
var confirmSpecialCharacter;
var confirmNumeric;


function generatPassword() {
  var confirmLength = prompt("How long do you want your password to be?")
}

// a while loop to ensure user password lenth option is within the required range 
while(confirmLength <= 8 || confirmLength >= 100) {
  alert("Please input the length between 8 to 100 characters.");
  var confirmLength = (prompt("How long do you want your password to be?"));
  } 

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