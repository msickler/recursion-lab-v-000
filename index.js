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

function isPalindrome(myString) {
  let n = myString.length;
  if (n < 2) {
   return true;
  } else if (myString[n - 1] === myString[0]) {
   return isPalindrome(myString.substring(1, n - 1));
  } else {
   return false;
  }
}

function addUpTo(myArray, index) {
   if(index > 0){
     return addUpTo(myArray, index-1) + myArray[index]
   } else {
     return myArray[index]
   }
 }

function maxOf(array) {
  if (array.length > 1) {
  	if (array[1] > array[0]) {
  		return maxOf(array.slice(1,array.length))
  	} else {
  		array[1] = array[0]
  		return maxOf(array.slice(1,array.length))
  	}
  } else {
  	return array[0]
  }
}