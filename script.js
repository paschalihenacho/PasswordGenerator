
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", 
                  "I", "J", "K", "L", "M", "N", "O", "P", 
                  "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", 
                  "i", "j", "k", "l", "m", "n", "o", "p", 
                  "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = ["/", "&", ".", "@","!","~", "-", "*", 
                    "%", ">", "+", ",", "<", "?"];

function generatePassword() {
  var confirmLength = (prompt("How long do you want your password to be?"));

  while(confirmLength <= 7 || confirmLength >= 128) {
      alert("Please input the length between 8 to 128 characters.");
      var confirmLength = (prompt("How long do you want your password to be?"));
      } 

      alert("Your password inludes " + confirmLength + " characters");

    var confirmSpecialChar = confirm("Click OK to include special characters");
    var confirmNumeric = confirm("Click OK to include numeric");    
    var confirmLowerCase = confirm("Click OK to include lowercase letters");
    var confirmUpperCase = confirm("Click OK to include uppercase letters");
 
      while(confirmUpperCase !== true && confirmLowerCase !== true && 
        confirmSpecialChar !== true && confirmNumeric !== true) {

      alert("You must choose at least one character type");
    var confirmSpecialChar = confirm("Click OK to include special characters");
    var confirmNumeric = confirm("Click OK to include numeric");    
    var confirmLowerCase = confirm("Click OK include lowercase letters");
    var confirmUpperCase = confirm("Click OK to include uppercase letters");   
    } 

    var passwordCharacters = []
      if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(upperCase)
      }
      
    if (confirmSpecialChar) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumeric) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);