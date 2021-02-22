// Assignment Code
var lowerCase = ["a", "b", "c", "d"];
var upperCase = ["A", "B", "C", "D"];
var numeric = [1, 2, 3, 4];
var specialCharacters = ["!", "@", "#", "$"];




var passwordLength = window.prompt ("Enter password length:");
var includeLowerCase = window.confirm ("Do you want to include lowercase?");
var includeUpperCase = window.confirm ("Do you want to include uppercase?");
var includeNumeric = window.confirm ("Do you want to include numbers?");
var includeSpecialCharacters = window.confirm ("Do you want to include special characters?");

var characterOptions = [];

var generateBtn = document.querySelector("#generate");

function generatePassword (
    passwordLength,
    includeSpecialCharacters,
    includeLowerCase,
    includeUpperCase,
    includeNumeric
) {

    if (includeLowerCase && includeUpperCase && includeNumeric && includeSpecialCharacters) {
        characterOptions = characterOptions.concat(lowerCase, upperCase, numeric, specialCharacters);
    } else if 
        (!includeLowerCase && includeUpperCase && includeNumeric && includeSpecialCharacters) {
        characterOptions = characterOptions.concat(upperCase, numeric, specialCharacters);
    }

    else if 
        (includeLowerCase && !includeUpperCase && includeNumeric && includeSpecialCharacters) {
        characterOptions = characterOptions.concat(lowerCase, numeric, specialCharacters);
    }
    
    else if 
        (includeLowerCase && includeUpperCase && !includeNumeric && includeSpecialCharacters) {
        characterOptions = characterOptions.concat(lowerCase, upperCase, specialCharacters);
    }

    else {
        characterOptions = characterOptions.concat(lowerCase, uppercase, numeric);
    }

    var finalPassword = ""

    for (i=0; i<passwordLength; i++)  {
        var randomIndex = Math.floor(Math.random() * characterOptions.length);
        finalPassword += characterOptions[randomIndex];

    }

    return finalPassword
}

// Write password to the #password input
function writePassword() {
    // let wasAnythingSelected = false;

    // function userChoice () {
    // let passwordLength = window.prompt ("Enter password length:");
    // let includeLowerCase = window.confirm ("Do you want to include lowercase?");
    // let includeUpperCase = window.confirm ("Do you want to include uppercase?");
    // let includeNumeric = window.confirm ("Do you want to include numbers?");
    // let includeSpecialCharacters = window.confirm ("Do you want to include special characters?");
    // }

    var password = generatePassword (
        passwordLength,
        includeSpecialCharacters,
        includeLowerCase,
        includeUpperCase,
        includeNumeric
    );
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);