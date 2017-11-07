function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString) {
   if (myString.length > 1) {
     let mySubString = myString.substring(1, myString.length);
     return reverseString(mySubString) + myString[0];
   } else {
     return myString;
   }
 }

function isPalindrome() {
  
}