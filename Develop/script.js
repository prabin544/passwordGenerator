// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword(){
    var passwordLength = prompt("How Long do you need your Password");
    var specialChar = confirm("Click ok to use special Charcter in your password?");
    var upperCase = confirm("Click ok to use Upper case in your password?");
    var lowerCase = confirm("Click ok to use lower case in your password?");
    var numericValue = confirm("Click ok to use numeric value in your password?");

    generatedPassword = "";
    var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"]
    count = 0;

    while (count <= passwordLength){
        for (let i = 0; i < passwordLength; i++) {
            if (numericValue) {
                var randNum = Math.floor(Math.random() * 10);
                generatedPassword = generatedPassword + randNum;
                count++;
            }
            if (upperCase){
                var randNum = Math.floor(Math.random() * 26);
                var randChar = String.fromCharCode(65 + randNum);
                generatedPassword = generatedPassword + randChar;
                count++;
            }
            if (lowerCase){
                var randNum = Math.floor(Math.random() * 26);
                var randChar = String.fromCharCode(65 + randNum);
                generatedPassword = generatedPassword + randChar.toLowerCase();
                count++;
            }
            if (specialChar){
                var randNum = Math.floor(Math.random() * 7);
                var randSpecialChar = specialCharacter[randNum];
                generatedPassword = generatedPassword + randSpecialChar;
                count++;
                
            }
            
        }
    }
    return generatedPassword
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
