//My 1st Website > Studies > Operators

/*

JavaScript Operators have some basic categories:

    * Arithmetic
    * Assignment 
    * Comparison/Relational
    * Logical
    * String
    * Literal
    * Conditional (ternary)

    Logical Operators:
    * My personal favorites!
    * && - Logical And - "this AND that"
    * || - Logical Or - "this OR that"
    * ! - BANG! - "Not this!"                           */ 
    
//EXAMPLE: Logical Operators are often used to make comparisons.
function valueRange(value) {
    if (value <= 100 && value >= 0) {
    return true;
  }
  return false;
}

valueRange(1, 99); // returns => true
    // the values (1, 99) are less than 100 AND greater-than 0
    
// valueRange(50); //returns =>  true
    // the value 50 is less than 100 AND greater-than 0
    
// valueRange(-1, 101); // returns =>  false;
    // the values (-1, 101) are NOT less than 100 AND greater-than 0


const mysticalNumber = 17;
valueRange(mysticalNumber); // returns => true; 
    // the value of const mysticalNumber is 17, which is less than 100 AND greater-than 0
/** 
 
 
 
    THE TERNARY OPERATOR 
The Ternary Operator is the only JavaScript operator that is composed of three 
operands. The first operand is the condition that will be evaluated, while the 
following two operands are the actions that will be carried out if the condition 
proves to be true or false, respectively. 
    
    Basic Syntax:
    condition ? value if true : value if false      */


// Example: The ternary operator can verify the properties on an object.
const sky = { color: 'blue', status: 'clear' };
sky.status === 'cloudy' ? console.log ('Gray skies are going to clear up!') : console.log ('Cerulean blue is like a gentle wave.');
// logs -> 'Cerulean blue is like a gentle wave.


// EXAMPLE: The ternary operator can be used in recursive processes.
var fibonacci = function(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci(7); // returns => 13


