////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(a, z) {

  if (a === z) { 
    return a | z; 
  
  } else { 
    return a > z ? z : a; 
  }  
  
  
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * Fxn isEven should accept a Number value, 
 * and then Return true if it is even, 
 * else false.
 * 
 * -Notes-> EQJS
 *  The remainder operator can be used to test whether a Number value
 *  is even or odd, but we can also use several other techniques:
 *    * Zero is even
 *    * One is odd
 *    * For any other Number(N), its even-ness is equal to N - z.
*/

function isEven(n) {

  if (n === 0) { 
    return true;
    //return false;
    
  } else if (n === 1) { 
    return false; 
    
  } else { 
  return n % 2 === 0 ? true : false; 
  
  }

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * Fxn countChars should behave like the countBs fxn below, 
 * except it should accept two arguments: 
 * a String value of multiple characters,
 * and a Stringv value of a single character.
*/ 
function countChars(string, letter) {
  
  let result = 0;
  
  for (let i = 0; i <= string.length - 1; i++) { 
    if (string[i] === letter) {
      console.log(i, ': ', string[i]);
      result++;
      
    }
    
  }
    return result; 
}
/*
function countChar(string, ch) { // <-Missing `s` caused to be non-working
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}
*/ 

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/** 
 * Write a Fxn countBs that accepts as String as its only argument,
 * and then returns a Number === uppercase B chars in the String.
*/

function countBs(string) {
  
  let result = 0;
  
  for (let i = 0; i <= string.length - 1; i++) { 
    
    if (string[i] === 'B') {
      
      console.log(i, ': ', string[i]);
      // Logging to console the current index and the value at that index,
        // e.g.: 0: [B], 1: [b] 
      result++; 
    }
    //} else { 
      //return 0; 
     
  } 
  return result; 

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
