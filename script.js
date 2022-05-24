// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
var numbersSet = "0123456789";
var characterSet = "#$%&'()*+,-./:;<=>?@[^_`{|}~";
var uppercaseSet = lowercaseSet.toUpperCase();
var useableSet = "";
//ask user for password length
var input = parseInt(prompt("Please choose a password length between 8 and 128"));

//make sure password length >=8 and <=128
if (!(input >= 8 && input <= 128)){
  alert("NOT ADEQUATE LENGTH");
  return("");
}
//ask user if you're supposed to use lowercase
input = confirm("USE LOWERCASE, OK FOR YES"); 
if(input == true){
  useableSet = useableSet + lowercaseSet;
}
//ask user if you're supposed to use uppercase
input = confirm("USE UPPERCASE, OK FOR YES"); 
if(input == true){
  useableSet = useableSet + uppercaseSet;
}

//ask user if you're supposed to use numerics
input = confirm("USE NUMBERS, OK FOR YES"); 
if(input == true){
  useableSet = useableSet + numbersSet;
}

//ask user if you're supposed to use special
input = confirm("USE SPECIAL CHARACTERS, OK FOR YES"); 
if(input == true){
  useableSet = useableSet +characterSet;
}
alert(useableSet);
//make sure they selected one of these
//make password
//validate that password follows the rules
//return password to the screen


return "";
}


// Write password to the #password input
function writePassword() {
var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
