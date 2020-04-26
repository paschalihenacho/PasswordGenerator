
var confirmLength = "";
var confirmSpecialChar;
var confirmNumericChar;
var confirmUpperCase;
var confirmLowerCase;

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
                        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
                        "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["/", "&", ".", "@","!","~", "-", "*", "%", ">", "+", ",", "<", "?"];

function generatePassword() {
  var confirmLength = (prompt("How long do you want your password to be?"));

  while(confirmLength <= 7 || confirmLength >= 128) {
      alert("Please input the length between 8 to 128 characters.");
      var confirmLength = (prompt("How long do you want your password to be?"));
      } 

    //confirm user password length input
      alert("Your password inludes " + confirmLength + " characters");

    // Determine parameters of password 
    var confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericChar = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
      // Loop if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialChar === false && confirmNumericChar === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialChar = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericChar = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
    } 

      // Assign an action to the password parameters NEED TO FIX THIS
      var passwordCharacters = []
      
    if (confirmSpecialChar) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericChar) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }

      console.log(passwordCharacters)

      // Empty string to be filled based on for loop selecting random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
document.querySelector("#generate").addEventListener("click", writePassword);