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

// Potential character sets to include in password.
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "_"];

// Empty variable to collect user choice of password length.
var numUserChars = "";

// Collects user inputs for password length and character sets to include.
var userInputs =  function() { 
    
    numUserChars = prompt("\n\nHow many characters would you like to include in your password? \nPlease enter a number between 8 and 128 below:\n");
    
    // Clears out of the program if 'Cancel' is selected in prompt box.
    if (numUserChars === null) {
        return
    }

    // Evaluates if chosen number is valid. So long as selection is invalid, new prompt is issued.
    while (numUserChars <8 || numUserChars>128) { 
        numUserChars = prompt("\n\nYour password must contain between 8 and 128 characters. \nPlease enter a number between 8 and 128 below:\n");
        
        if (numUserChars === null) {
            return
        }
    }

    // Evaluates length of user character pool to determine if any charater sets have been selected. At least one set must be selected to exit while loop. For any selected character set, said array is added to userCharPool. 
    while (userCharPool.length <1) { 
        alert("\n\nPlease choose at least one set of characters to include in your password from the following prompts.\n");
        if (confirm("\n\nWould you like to include lowercase characters in your password? \n'OK' for yes. \n'Cancel' for no.\n")){
            userCharPool = userCharPool.concat(lowerLetters);
        }
        if (confirm("\n\nWould you like to include uppercase characters in your password? \n'OK' for yes. \n'Cancel' for no.\n")){
            userCharPool = userCharPool.concat(upperLetters);
        }
        if (confirm("\n\nWould you like to include numbers in your password? \n'OK' for yes. \n'Cancel' for no.\n")){
            userCharPool = userCharPool.concat(numbers);
        }
        if (confirm("\n\nWould you like to include special characters in your password? \n'OK' for yes. \n'Cancel' for no. ")){
            userCharPool = userCharPool.concat(specialChar);
        }
    }
}

// Selects random characters from the userCharPool * number selected by user and produces as a password string.
var randomizePassword = function() {
    function randomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    for ( i=0; i<numUserChars; i++) {
        securePassword = securePassword.concat(userCharPool[randomNumber(userCharPool.length)])
    }
    stringPassword = securePassword.join("");
}

// Clears variables so that the program can continue to run.
var clear = function() {
    userCharPool = [];
    securePassword = [];
    stringPassword = "";
}

// Executes steps of password generator.
var generatePassword = function(){
    clear();
    userInputs(); 
    randomizePassword();
    return stringPassword;
}