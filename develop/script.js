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


function generatePassword() {
  // Different character sets that can be used to generate a password
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Ask the user how long the password should be between 8 to 128 characters
  var length = prompt(
    "Enter the length of the password (between 8 and 128 characters):"
  );
  length = parseInt(length);
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  // Ask the user if they want to use lowercase, uppercase, numeric or special characters
  var useLowercase = confirm("Use lowercase characters?");
  var useUppercase = confirm("Use uppercase characters?");
  var useNumeric = confirm("Use numeric characters?");
  var useSpecial = confirm("Use special characters?");
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("You must select at least one character type.");
    return "";
  }

  // These are the different options when selecting a password
var charset = "";
  if (useLowercase) {
    charset += lowercaseChars;
  }
  if (useUppercase) {
    charset += uppercaseChars;
  }
  if (useNumeric) {
    charset += numericChars;
  }
  if (useSpecial) {
    charset += specialChars;
  }
  
  // This will generate the password
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}
// This will allow the user to click a button to copy their code to the clipboard
function copyToClipboard() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy")
  alert("Copied the text: " + copyText.value);
}