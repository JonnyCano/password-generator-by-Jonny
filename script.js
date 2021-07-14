// Assignment code here

// Make the password variables
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const numbersArabic = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialCharacter = ["!", "\"", "#", "$", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
    //var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// get the character length for password
function getPasswordLength() {
  let passwordLength = prompt("How long would you like your password?\n- Enter a number between and including 8 and 128")
  
  // confirm valid entry
  if (!passwordLength || passwordLength == null || passwordLength < 8 || passwordLength > 128) {
      alert("Enter a valid value")
      getPasswordLength()
  } else {
      generatePassword(parseInt(passwordLength))
  }
}

// tailor the users password by asking them if they would like to include lower case letters
function getUserLowerCaseData() {
    let lowerCaseConfirm = confirm("Would you like to include lower-case letters in your password?")

    if (lowerCaseConfirm) {
        return true
    } else {
        return false
    }
}

// concatenate the arrays and loop through the array equal to the amount of times the user entered for their password length
function generatePassword(passwordLength) {
    
    let passwordValue = ""
    let passwordArray = lowerCase.concat(upperCase).concat(numbersArabic).concat(specialCharacter)
    for (var i = 0; passwordLength > i; i++) {
        passwordValue += passwordArray[Math.floor(Math.random() * passwordArray.length)]
    }

    if (getUserLowerCaseData()) {
      console.log(passwordArray)
    } else {
      console.log("still got it")
    }

    writePassword(passwordValue)
}

// Add event listener to generate button
generateBtn.addEventListener('click', getPasswordLength);
