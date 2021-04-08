////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/** 
 * - Should create array without contents when given same numbers as range
 * - Should create array with contents of integers within given range
 * - Should create array with contents of integers within given range, 
 *   integrating [the] given step
 * - Should create array with contents of integers within given range, 
 *   integrating NEGATIVE step
*/ 
function range(a, z, step) {
//-Note-> Be sure to integrate the step value, if given!
  let rangeArr = []; // <- Declared variable rangeArr to store range values.
  // The rangeArr variable will house range values pushed-into it,
    // unless the arguments are equal, in which case Fxn range
    // returns an Array Literal
  if (a === z) { 
    return []; // Returning empty Array when a is strictly-equal-to z.
  
  }
  else if (typeof step === 'undefined' && a < z) {
    for (let i = a; i <= z; i++) { 
      rangeArr.push(i); 
      
    }
  }
  else if (a < z && step > 0) {
    for (let i = a; i <= z; i += step) { 
      // i += step should work exactly the same way as i = i + step
    rangeArr.push(i); 
    
    }
  } else { 
  //else if (a > z && step > 0) { 
    for (let i = z; i <= a; i += step) { 
      rangeArr.push(i); 
      
    }
  }
  return rangeArr; 
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  
  let sum = 0; 
  for (let i = 0; i <= array.length - 1; i++) {
    if (array.length <= 0 || array[i] === 0) { 
    return sum; 
    
    } else { 
      sum += array[i];
    }
  }
  return sum; 
  
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * - Should reverse empty array
 * - Should return new array
 * - Should reverse same large array
 * - Should have no side effects
*/ 
function reverseArray(array) {
  
  let newArr = [];
  let reversed = [];
  console.log('[0]:', array[0]);
  console.log('[', array.length - 1, ']', ':', array[array.length - 1]);
  
  if (!array.length) { 
    return [];

  } else {
    for (let i = 0; i <= array.length - 1; i++) { 
      newArr.push(array[i]);
    } for (let j = newArr.length - 1; j >= 0; j--) {
      reversed.push(newArr[j]);
    }
    console.log('newArr:', newArr);
  // Logs > newArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log('reversed:', reversed);
  // Logs > reversed: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  }

  return reversed; 

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/** 
 * -Notes-> Reversing an Array-in-Place Using the Reverse Method.
 * 
 *  Sources: 
 *  - https://www.tutorialspoint.com/javascript/array_reverse.htm
 *  - https://medium.com/@reactorboy/reversing-the-array-without-
 *          mutating-original-in-js-b7d38aafba7b#:~
 *          :text=I%20came%20across%20the%20destructiveness,
 *          To%20mutate%20without%20changing%20original.
 * 
 *  Syntax: array.reverse()
 * 
 * - The Reverse method does not require an argument. 
 * - It reverses an Array "in-place," meaning that the first
 *   element becomes the last element and the last element becomes
 *   the first.
 * - While convenient, the Reverse method can mutate the original array, 
 *   which means it is not always the best choice for this task.
 *    - Mutation is considered a Side Effect.
*/ 
function reverseArrayInPlace(array) {
  
  let reversedInPlace = array.reverse(); 
  return reversedInPlace; 

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array){
  //let list; // <- fails tests
  //var list = null; // <- passes tests
  //let list = {}; // <- fails tests
  let list = null; // <- passes tests
  
  for (var i = array.length - 1; i >= 0; i--) { 
  // Traversing the passed-in array, beginning at the last array element (i = array.length - 1),
  // stopping at the first element of the array (i >= 0),
  // and decrementing by 1 step per iteration (i).
    list = { value: array[i], rest: list }; 
  // ^ Here, the list variable is being assigned the value of an object
    
  }
  
  return list;
  
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  //var arrFromList = [];
  let listArr = [];
  
  while(list != null) {
    listArr.push(list.value); 
    //arrFromList.push(list.value);
    list = list.rest;
  }
  
  //return arrFromList;
  return listArr; 
  
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {

  return {value, rest: list};
  
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) { //(array, n) {

  if (!list) { 
    return undefined;
  
  } 
  else if (n == 0) { 
    return list.value;
  
  } else { 
    return nth(list.rest, n - 1);
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/// deepEqual /// exercise 9 of 9 /// 
function deepEqual(a, b) {
// I feel like I could apply the ternary operator in this Fxn, but I'm too tired rn
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
