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
    * ! - BANG! - "Not this!"                           
    
    
The Assignment Operators are probably the most used type of Operator in Java-
Script. The Equals Operator, or Assignment Operator, is represented by the single
equals (=) sign. Its siblings, loosely-equal-to and strictly-equal-two, are 
represented with the double equals (==) and the triple equals (===) signs 
respectively.

The Assignment Operator (=) is used to tell our program that a specific 
variable is equal to the value value on the right side of the equals sign, 
so that--just like in algebra--a variable x can equal value y, as follows:

        x = y; // x is equal to y
        y = 7; // y is equal to 7
        
        // ergo: 
        
        x = 7; // x is equal to 7


Almost as frequently used, all of the Comparison Operators, such as
(===, ==, !=, annd !==) are used used to check to see how one thing relates 
to another thing. The strict equality operators ( === and !== ) use the 
Strict Equality Comparison Algorithm to compare two operands. If the operands 
are of different types, return false:


        7 === 7; // true
        x === 7; // true
        y === 7; // true
        x === y; // true 
        'seven' === 7; // false
        '7' == '7' // true
        
As above, the conditional checks return a Boolean--either True or False--if the conditions
on either side of the Comparison Operator evaluate as expected (i.e.: false
for a false comparison, and true for a true comparison).

All of the types of Operators above, the Assignment Operator and all of the 
Comparison Operators, aside from the Ternary Operator, are Unary Operators. 
Unary means one, which is why these operators only take a single operand. The
work they do on the operand, or the operation performed on it, is dictated by 
the operator:

        =   The Assignment Operator gives value to a variable,
            as in x = 7, x = y, etc.
            
        ==  Loosely-Equal-To
        === Strictly-Equal-To
        !=  Not Loosely-Equal
        !== Strictly-NOT-Equal
        <   Less Than
        >   Greater Than
        <=  Less Than or Equal-To
        =>  Greater Than or Equal-To
            
        ^^^ The Comparison Operators act on values by performing a comparison
            evaluation, such as:
            
            a < b; // is a smaller than b? // true
            7 >= 6; // is 7 greater-than OR equal-to 6? // false
            

The Arithmetic Operators are another subset of Unary Operator. They are used to 
change the sign ( + || - ) of a value, to increase a value per an increment (in-
crementation), and to decrease a value per an increment (decrementation). They can
also be used to perform mathematical operations, as in the functions below:
*/     
    
//EXAMPLE:  Logical Operators are often used in composition with Comparison
//          Operators to make comparisons bewtween values.
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

//EXAMPLE: Arithmetic Operators and Logical Operators can work together, too.
function sumUp(z, y) {
    let result = 0;
    if (z > y) {    // The if statement evaluates if value z is bigger than  y;
        result + z + z; // this incrementation evaluates to a total of 8,
    }                   // which is the value that is assigned to the result variable.
    return result; // Finally, the sum of z = 8 (for *this* Function Call) is
                    // stored in the result variable and then Rerturned to us.
}
sumUp(1 + 3, 3); // Returns => 8

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


