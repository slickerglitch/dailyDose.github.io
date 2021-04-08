
// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  let flatArr = [];
  
  array.forEach(function(element) { 
    if(!Array.isArray(element)) { 
      flatArr.push(element);
      
    } else { 
      flatArr = flatArr.concat(flatten(element)); 
      
    }
  });
  return flatArr; 
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/** 
 * // ch05 EQJS // Your own loop //
 * 
 * Write a higher-order function loop that provides something 
 * like a For-Loop statement. 
 * 
 * - It takes a value, a test function, an update function, and a body function. 
 * - Each iteration, it first runs the test function on the current loop value 
 *   and stops if that returns false.
 * - Then it calls the body function, giving it the current value. 
 * - Lastly, it calls the update function to create a new value...
 *   and then begins again.
 * 
*/
function loop(start, testFxn, updateFxn, bodyFxn) {
  
  for (let value = start; testFxn(value); value = updateFxn(value)) {
    bodyFxn(value);
  }
  
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/** 
 * -Notes-> on Predicate Functions, from FCC: 
 * A predicate function is a function that takes one value as input 
 * and then returns true / false based on whether the value satisfies the condition. 
 * Example: isEven() is a predicate function.
*/ 

function every(array, predicate) {
  
  if(array.length===0) {
    return true;
    
  } else {
    for(let i = 0; i < array.length; i++){
      if(!predicate(array[i])){
        return false;
      }
    }
    return true;
  } 

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function characterScript(code) {
  // Warning: `SCRIPTS is not defined...` appears for For-Loop statement below
    // but the functions are working and pass all tests.
  for (let script of SCRIPTS) {

    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
      
    }
    
  }
  return null;
}



function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}



function dominantDirection(text) {

  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}  

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
}
