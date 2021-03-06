//Element Retrieval
var generateBtn = document.querySelector("#generate");
let checkBoxL = document.querySelector("#Lowercase");
let checkBoxU = document.querySelector("#Uppercase");
let checkBoxNum = document.querySelector("#Numeric");
let checkBoxSpec = document.querySelector("#Special");
let userInput = document.querySelector(".input")
let passwordText = document.querySelector("#password");
//Global Variables

//Variable containing ASCII values
const randomCharCodes = {
 upperCaseCodes : () => String.fromCharCode(Math.floor(Math.random() * 15) + 65),

 lowerCaseCodes : () => String.fromCharCode(Math.floor(Math.random() * 15) + 97),

 numericCodes : () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),

 specialCodes : () => String.fromCharCode(33, 47).concat( //concat short for concatenation will combine the smaller arrays created by the function into one large array.
  String.fromCharCode(58, 64).concat(
    String.fromCharCode(91, 96).concat(
      String.fromCharCode(123, 126) //Multiple arrays need to be generated since if wrote (33, 126) specialCharacters would include non symbols.
    )
  ) // grabs a random character from the four concating
)[Math.floor(Math.random() * 8)]
    }

console.log(randomCharCodes.specialCodes())


// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  const includeLower = checkBoxL.checked;
  const includeUpper = checkBoxU.checked;
  const includeNum = checkBoxNum.checked;
  const includeSpec = checkBoxSpec.checked;
  let passwordText = document.querySelector("#password");
  let userInput = document.querySelector(".input")

//if (!Nan(userInput.parse))
  if (userInput.value >= 8 && userInput.value <= 128) { //checks if characters in input are not a number
    //console.log(charLength);
    
    const password = generatePassword(includeLower, includeNum, includeUpper, includeSpec);
    document.getElementById("password").value = password
    //console.log(generatePassword);

  } else {
    passwordText.value = "ERROR: Length declared inappropriate and or includes letters!!"
  }
})



function randomGen(funcName) { //holds logic to gen random
  let random = randomCharCodes[funcName]()
  console.log(random);
  return random;
}


function generatePassword(includeLower, includeNum, includeUpper, includeSpec) {
  let charCodes = ""; //charCodes functions as a container to hold possible selections from the user.
  var typesCount = includeLower + includeNum + includeUpper + includeSpec;
  var typesArray = [{ lowerCaseCodes: includeLower }, { numericCodes: includeNum }, { upperCaseCodes: includeUpper }, { specialCodes: includeSpec }];
  console.log(typesArray);
  if (typesCount === 0) {
    return "";
  }
  let choosenTypes = typesArray.filter(type => Object.values(type)[0])
  for (let i = 0; i < userInput.value; i++) {
    let type = choosenTypes[Math.floor(Math.random() * choosenTypes.length)]
    //typesArray.filter(type => Object.values(type)[0]).forEach(type => {
      var funcName = Object.keys(type)[0]//grabs keys from the object at index 0
      charCodes += randomGen(funcName)

   //})
  }
  console.log("charCodes is ", charCodes);
  //return charCodes.substring(0, userInput.value);
  let passwordCharacters = []
  for (let i = 0; i < userInput.value; i++) {
    let characters = charCodes[Math.floor(Math.random() * userInput.value)]
    //console.log(characters);
    passwordCharacters.push(characters);
    //console.log(passwordCharacters)
    //passwordText.value = characters;
  }
  return charCodes.substring(0, userInput.value);
  // return passwordCharacters.join("")
}
//console.log(numericCodes);

//generatePassword();


//I am sorry about all the random bits of code commented out and left around. I use this project to test and play around I'm really sorry 0-0



//TODO:
//Gen password 8 - 128 characters
//choose between lowercase, uppercase, numeric, and/or special characters
//generated password displayed on page

//const test = String.fromCharCode(67,79,68,69);

//console.log(test);


// function arrayGen(low, high){
  //   const array = []
  //   for (i = low, i <= high; i++;){
  //     array.push(i)
  //   }
  //   return array;
  // }