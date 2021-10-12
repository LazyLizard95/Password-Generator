//Element Retrieval
var generateBtn = document.querySelector("#generate");
let checkBoxL = document.querySelector("#Lowercase");
let checkBoxU = document.querySelector("#Uppercase");
let checkBoxNum = document.querySelector("#Numeric");
let checkBoxSpec = document.querySelector("#Special");
let userInput = document.querySelector(".input")
let passwordText = document.querySelector("#password");     
//Global Variables

//Variables containing ASCII values
let upperCaseCodes = String.fromCharCode(65, 90)
let lowerCaseCodes = String.fromCharCode(97, 122)
let numericCodes = String.fromCharCode(48, 57)
let specialCodes = String.fromCharCode(33, 47).concat( //concat short for concatenation will combine the smaller arrays created by the function into one large array.
  String.fromCharCode(58, 64).concat(
    String.fromCharCode(91, 96).concat(
      String.fromCharCode(123, 126) //Multiple arrays need to be generated since if we simply wrote (33, 126) specialCharacters would include non symbols.
     )
   )
 )


// Add event listener to generate button
generateBtn.addEventListener("click", () =>  {
  const includeLower = checkBoxL.checked;
  const includeUpper = checkBoxU.checked;
  const includeNum = checkBoxNum.checked;
  const includeSpec = checkBoxSpec.checked;
  let passwordText = document.querySelector("#password");     
  let charLength = userInput.value;
  
  
  if(charLength >= 8 && charLength <= 128){ //checks if characters in input are not a number
            //console.log(charLength);
            generatePassword(charLength, includeLower, includeNum, includeUpper, includeSpec);
            //console.log(generatePassword);
            
          } else{
             passwordText.value = "ERROR: Please enter only numbers within the inputbox!" //if characters are not numeric display an error.
          }
})



function generatePassword(charLength, includeLower, includeNum, includeUpper, includeSpec){
  let charCodes = ""; //charCodes functions as a container to hold possible selections from the user.
  
  if (includeLower){
  charCodes = charCodes.concat(lowerCaseCodes)
  }  //if box is checked, include array containing lowerCaseCodes into the container array charCodes
  if (includeUpper){
  charCodes = charCodes.concat(upperCaseCodes)
  }
  if (includeNum){ 
  charCodes = charCodes.concat(numericCodes)
  }
  if (includeSpec){
  charCodes = charCodes.concat(specialCodes)
  } 

  for (i = 0; i < charLength; i++){
    let characters = charCodes[Math.floor(Math.random() * charLength)]
      console.log(characters);
      passwordText.value = characters;
    }
}
//console.log(upperCaseCodes);

//generatePassword();

//TODO:
//Gen password 8 - 128 characters
//choose between lowercase, uppercase, numeric, and/or special characters
//generated password displayed on page

//const test = String.fromCharCode(67,79,68,69);

//console.log(test);