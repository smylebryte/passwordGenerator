// Assignment Code
var lowerCase = ["a", "b", "c", "d"];
var upperCase = ["A", "B", "C", "D"];
var numeric = [1, 2, 3, 4];
var specialCharacters = ["!", "@", "#", "$"];

var characterOptions = [];

var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
    var passwordLength = window.prompt ("Enter password length:");
    var includeLowerCase = window.confirm ("Do you want to include lowercase?");
    var includeUpperCase = window.confirm ("Do you want to include uppercase?");
    var includeNumeric = window.confirm ("Do you want to include numbers?");
    var includeSpecialCharacters = window.confirm ("Do you want to include special characters?");
}

    for (i=0; i<passwordLength; i++)  {
        var randomIndex = Math.floor(Math.random() * characterOptions.length);
        finalPassword += characterOptions[randomIndex];
    
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

        function writePassword() {
            var password = generatePassword (
                passwordLength,
                includeSpecialCharacters,
                includeLowerCase,
                includeUpperCase,
                includeNumeric
                );
        var passwordText = document.querySelector ("#password");
                
        passwordText.value = password;

    generateBtn.addEventListener ("click", writePassword);

    }}}

    generatePassword();