//Chapter (12 & 13 )

/*Q:1:
// Function to check if a character is a number
function isNumber(char) {
    return !isNaN(parseFloat(char)) && isFinite(char);
  }
  
  // Function to check if a character is an uppercase letter
  function isUppercaseLetter(char) {
    const charCode = char.charCodeAt(0);
    return charCode >= 65 && charCode <= 90;
  }
  
  // Function to check if a character is a lowercase letter
  function isLowercaseLetter(char) {
    const charCode = char.charCodeAt(0);
    return charCode >= 97 && charCode <= 122;
  }
  
  // Input character
  const input = prompt("Enter a character (number or letter):");
  
  if (isNumber(input)) {
    console.log(`${input} is a number.`);
  } else if (isUppercaseLetter(input)) {
    console.log(`${input} is an uppercase letter.`);
  } else if (isLowercaseLetter(input)) {
    console.log(`${input} is a lowercase letter.`);
  } else {
    console.log(`${input} is neither a number nor a letter.`);
  }*/

  /*Q:2:
  // Function to compare two integers and display the larger one
function compareIntegers(a, b) {
    if (a > b) {
      console.log(`${a} is larger than ${b}.`);
    } else if (a < b) {
      console.log(`${b} is larger than ${a}.`);
    } else {
      console.log(`${a} and ${b} are equal.`);
    }
  }
  
  // Input two integers
  const num1 = parseInt(prompt("Enter the first integer:"));
  const num2 = parseInt(prompt("Enter the second integer:"));
  
  // Check and display the result
  compareIntegers(num1, num2);*/

 /* Q:3:
 // Input a number from the user
const number = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (number > 0) {
  console.log(`${number} is a positive number.`);
} else if (number < 0) {
  console.log(`${number} is a negative number.`);
} else {
  console.log(`${number} is zero.`);
}*/

/*Q:4:
// Function to check if a character is a vowel
function isVowel(char) {
    // Convert the character to lowercase to handle both upper and lower case vowels
    char = char.toLowerCase();
  
    // Check if the character is one of the vowels
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
  }
  
  // Input a character from the user
  const inputChar = prompt("Enter a character (single letter):");
  
  if (inputChar.length === 1 && /^[a-zA-Z]$/.test(inputChar)) {
    const result = isVowel(inputChar);
    console.log(`${inputChar} is a vowel: ${result}`);
  } else {
    console.log("Invalid input. Please enter a single letter.");
  }*/

  /*Q:5:
  // Step 1: Store the correct password in a variable
const correctPassword = "YourSecretPassword123";

// Step 2: Ask the user to enter their password
const userPassword = prompt("Please enter your password:");

// Step 3: Validate the passwords
if (!userPassword) {
  // Check if the user has entered a password
  alert("Please enter your password.");
} else if (userPassword === correctPassword) {
  // Check if both passwords are the same
  alert("Correct! The password you entered matches the original password.");
} else {
  // Passwords do not match
  alert("Incorrect password.");
}
*/

/*Q:6:
var greeting;
var hour = 13;
if (hour < 18) {
  alert("Good evening");
} else  {
  alert("Good day");
}*/

//Q:7:
// Get the time input from the user (e.g., 1900 for 7:00 PM)
//var timeInput = prompt("Enter the time in 24-hour clock format (e.g., 1900):");

// Convert the input to a number
//var time = parseInt(timeInput);

/* Check different cases and provide greetings
if (time >= 0 && time < 1200) {
  console.log("Good morning!");
} else if (time >= 1200 && time < 1700) {
  console.log("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
  console.log("Good evening!");
} else if (time >= 2000 && time <= 2359) {
  console.log("Good night!");
} else {
  console.log("Invalid input. Please enter a valid 24-hour time.");
}*/

//Chapter(& 14& 16)
/*Q:1:
const studentName =[];*/
/*Q:2:
const studentName = new Array();*/
/*Q:3:
const fruits =["apple","banana","cherry","date"];*/
/*Q:4:
const numbers =[1,2,3,4,5];*/
/*Q:5:
const booleanValues =[true,false,true,true,false];*/
/*Q:6:
const mixedArray =["apple","42",true,"banana",false,7];*/
 /*Q:7:
 const qualifications =[
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "MS",
  "M.Phil",
  "PhD"
 ];*/
 /*Q:8:
 // Array to store student names
 const studentNames =["Micheal","John","Tony"];
 //Array to store student scores
 const studentScores =[320,230,480];
 //Assuming total marks for each student
  const totalMarks = 500;
  //calculate  and display score and percentages
  for(let i=0; i<studentNames.length;i++){
    const  name =studentNames[i];
    const scorestudentScores[i];
    const percentage =(score /totalsMarks)*100;
    console.log('score of ${name} is ${score}. percentage ${percentage}%');
  }*/
  /*Q:9:
   const colors =["red","green","blue"];
   console.log("Original Array:"+colors);
   const colorToAddaStart =prompt("Enter  a colorto addtothe begining:");
   colors.unshift(colorsToAddStart);
   console.log("Updated Array (Added at the begining):"+colors);
   const colorToAddAtEnd = prompt("Enter  a color to add to the end:");
   colors.push(colorToAddEnd);
   console.log("Updated Array (Added at the end):"+colors);
   colors.unshift("purpule","orange");
   console.log("Updated Array (Added two at the begining):"+colors);
   colorToAddAtEnd.shift();
   console.log("Updated Array(DEleted First color):"+colors);
   colors.pop();
   console.log("Updated Array (Deleted Last colors):"+colors);
   const indexToAdd = parseInt(prompt("Enterthe index to add a color:"));
   const colorToAddAtIndex =prompt("Enter a color to add at that index:");
   colorToAddAtEnd.splice(indexToAdd,0,colorToAddAtIndex);
   console.log("updated Array (Added at index):"+colors);
   const indexToDejete = parseInt(prompt("Enter the index to start deleting from:"));
   const numToDelete = parseInt(prompt("Enter the number of color to delete:"));
   colors.splice(indexToDelete,numToDelete);
   console.log("Updated Array(Deleted from index):"+colors);*/
  /*Q:10:
  const studentScores = [320,560,469,512];
  console.log("Score of student:"+studentScores);
  studentScores.sort((a,b)=>a-b);
  console.log("Ordered scores of student:"+studentScores);
  */
 



  






  


  
  