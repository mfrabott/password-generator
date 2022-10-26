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
var password =[];

var userInputs =  function() { 
    numUserChars = prompt("Please choose the number of characters - between 8 and 128 - for your Password:");          
    while (numUserChars <8 || numUserChars>128) { 
        numUserChars = prompt("Your selection is invalid. Please enter a number between 8 and 128.");
    }
    if (confirm("Would you like to include lowercase characters in your password?")){
        userCharPool = userCharPool.concat(lowerLetters);
    }
    if (confirm("Would you like to include uppercase characters in your password?")){
        userCharPool = userCharPool.concat(upperLetters);
    }
    if (confirm("Would you like to include numbers in your password?")){
        userCharPool = userCharPool.concat(numbers);
    }
    if (confirm("Would you like to include special characters in your password?")){
        userCharPool = userCharPool.concat(specialChar);
    }
}

var randomizePassword = function() {
    function randomNumber(max) {
        return Math.floor(Math.random() * max);
}
    for ( i=0; i<numUserChars; i++) {
        password = password.concat(userCharPool[randomNumber(userCharPool.length)])
}
    password = password.join("");
}

var generatePassword = function(){
    userInputs(); 
    randomizePassword();
    return password;
}

writePassword()