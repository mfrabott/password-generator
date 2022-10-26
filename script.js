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

var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", "_"];
var numUserChars = "";
var userCharPool = [];
var securePassword = [];

var userInputs =  function() { 
    numUserChars = prompt("\n\nHow many characters would you like to include in your password? \n\nPlease enter a number between 8 and 128:");          
    
    while (numUserChars <8 || numUserChars>128) { 
        numUserChars = prompt("Your selection is invalid. Please enter a number between 8 and 128.");
    }

    while (userCharPool.length <1) { 
        alert("Please choose at least one set of characters to include in your password from the prompts.");
        
        if (confirm("\n\nWould you like to include lowercase characters in your password? \n\n'OK' for yes. \n'Cancel' for no. ")){
            userCharPool = userCharPool.concat(lowerLetters);
        }
        if (confirm("\n\nWould you like to include uppercase characters in your password? \n\n'OK' for yes. \n'Cancel' for no. ")){
            userCharPool = userCharPool.concat(upperLetters);
        }
        if (confirm("\n\nWould you like to include numbers in your password? \n\n'OK' for yes. \n'Cancel' for no. ")){
            userCharPool = userCharPool.concat(numbers);
        }
        if (confirm("\n\nWould you like to include special characters in your password? \n\n'OK' for yes. \n'Cancel' for no. ")){
            userCharPool = userCharPool.concat(specialChar);
        }
    }
}

var randomizePassword = function() {
    function randomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    for ( i=0; i<numUserChars; i++) {
        securePassword = securePassword.concat(userCharPool[randomNumber(userCharPool.length)])
    }
    stringPassword = securePassword.join("");
}

var clear = function() {
    userCharPool = [];
    securePassword = [];
    stringPassword = "";
}

var generatePassword = function(){
    clear();
    userInputs(); 
    randomizePassword();
    return stringPassword;
}