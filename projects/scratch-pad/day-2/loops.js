// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (let i = 0; i <= array.length - 1; i++) { 
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

  for (let i = array.length - 1; i >= 0; i--) { 
    console.log(array[i]); 

  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  let keyArr = [];
  for (var key in object) {
    //console.log(object[key]);
    keyArr.push(key); 
  }
  return keyArr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //let keyArr = [];
  for (var key in object) {
    //console.log(object[key]);
   console.log(key); 
  }
  //return keyArr;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  let valArr = [];
  for (var key in object) {
    //console.log(object[key]);
    valArr.push(object[key]); 
  }
  return valArr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) { 
    console.log(object[key]); // object[key] refers to the value on the k:vPr
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  let oblong = [];
  console.log(oblong); 
  for (var key in object) {
    oblong.push(key + ' : ' + object[key]);
  }
  console.log(oblong); 
  return oblong.length; 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  let valArr = [];
  //console.log(valArr.length, valArr); 
  for (var key in object) { 
    valArr.push(object[key]);
  }
  //console.log(valArr.length, valArr); 
  for (let i = valArr.length - 1; i >= 0; i--) { 
   // console.log(i, ':', valArr[i]);
   console.log(valArr[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
