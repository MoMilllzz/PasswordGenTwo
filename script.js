// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijflmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "*;<>()[]{}#$?!^|'";
var pwLength = "";
//var length = "8-100"
;

//Dom Elements
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("How long would you like your password to be");
  var lowercase = confirm("Do you want to use lowercase letters?");
  var uppercase = confirm("Do you want to use uppercase letters?");
  var number = confirm("Do you want to use numbers?");
  var symbol = confirm("Do you want to use symbols?");

  var results           = '';
  var characters        = "ABCDEFGHIJKLMKOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLenght  = characters.length;
  for ( var i =0; i < length; i++ ) {
    results += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return results;

}

function validateForm() {
  var a = document.getElementById("no"). value;
  var b = document.getElementById("qty").value;

  if (!a.length) {
    alert("Form number must be filled out");
    return false;
  }else if (!a.match(/^[0-9]+$/)) {
    alert("Form number must be filled with numbers only");
    return false;
  }else if (a.length >10) {
    alert("Form number must not be greater than 10 character length");
    return false;
  }else if (!b.length) {
    alert("Quantity must be filled out");
    return false;
  }else if (!b.match(/^[0-9]+$/)) {
    alert("Quantity must be filled with numbers only");
    return false;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
