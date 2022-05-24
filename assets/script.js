// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordLength = 0;
var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
var numbersSet = "01234567890123456789";
var characterSet = "#$%&'()*+,-./:;<=>?@[^_`{|}~";
var uppercaseSet = lowercaseSet.toUpperCase();
var useableSet = "";
//ask user for password length
var passwordLength = parseInt(prompt("Please choose a password length between 8 and 128"));

//make sure password length >=8 and <=128
if (!(passwordLength >= 8 && passwordLength <= 128)){
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

//make sure they selected one of these
if(useableSet== ""){
  alert("PLEASE SELECT AT LEAST ONE SET OF CHARACTERS");
  return ("");
}

//make password
var builtPassword = "";
var randomCharacter ="a";
for(var i=0; i < passwordLength; i++){
  randomCharacter = useableSet[Math.floor(Math.random() * useableSet.length)];
  builtPassword=builtPassword+randomCharacter;
}

//return password to the screen
return builtPassword;
}


// Write password to the #password input
function writePassword() {
var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
