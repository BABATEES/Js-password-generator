// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordlength = 10;
var optionsarr = [];

// Function to prompt user for password options
function getPasswordOptions() {
  optionsarr = [];

  passwordlength = parseInt(prompt("Please input the length of your password!(between 10 and 64"));
  if (isNaN(passwordlength) || passwordlength < 10 || passwordlength > 64) {
    alert("Password length has to be a number, 10-64 digits. Please try again");
    return false;

  }

  if (confirm("Do you want lowercase in your password")) {
    optionsarr = optionsarr.concat(lowerCasedCharacters);
  }
  if (confirm("Do you want Uppercase in your password")) {
    optionsarr = optionsarr.concat(upperCasedCharacters);
  }
  if (confirm("Do you want numbers in your passsword")) {
    optionsarr = optionsarr.concat(numericCharacters);
  }
  if (confirm("Do you want symbols in your password")) {
    optionsarr = optionsarr.concat(specialCharacters);
  }
  return true;



}

// Function for getting a random element from an array
function getRandom(arr) {



}

// Function to generate password with user input
function generatePassword() {


}
console.log(generatePassword)
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);