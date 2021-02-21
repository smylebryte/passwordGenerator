// Assignment Code


var generateBtn = document.querySelector("#generate");

function generatePassword (
    passwordLength,
    includeSpecialCharacters,
    includeLowerCase,
    includeUpperCase,
    includeNumeric
    ) {

    let characterOptions = [];

    let lowerCase = ["a", "b", "c", "d"];
    let upperCase = ["A", "B", "C", "D"];
    let specialCharacters = ["!", "@", "#", "$"];

    if (includeSpecialCharacters) {
        characterOptions = characterOptions.concat(specialCharacters);
    }

    if (includeUpperCase) {
        characterOptions = characterOptions.concat(upperCase);
    }

    let finalPassword = ""

    for (i=0; i<passwordLength; i++)  {
        let randomIndex = Math.floor(Math.random() * characterOptions.length);
        finalPassword += characterOptions[randomIndex];

    }

    return finalPassword
}

// Write password to the #password input
function writePassword() {
    let wasAnythingSelected = false;
    let passwordLength = window.prompt ("Enter length:");
    let includeSpecialCharacters = true;
    let includeLowerCase = true;
    let includeUpperCase = true;
    let includeNumeric = true;



    var password = generatePassword(
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