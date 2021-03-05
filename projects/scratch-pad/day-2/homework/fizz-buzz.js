// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE /
    
    //let value = [];
    let start = 0; 
    let end = 100;
    
    while (start < end) { 
        start += 1; 
       // value.push(start += 1); 
        
        if (start % 3 === 0 && start % 5 === 0) { 
            console.log('FizzBuzz');
        } 
        else if (start % 3 === 0) { 
            console.log('Fizz');
            
        }
        else if (start % 5 === 0) { 
            console.log('Buzz');
            
        } else { 
            console.log(start); 
    }

  }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}