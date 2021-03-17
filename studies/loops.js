
const solSystem = [ 'Mercury', 'Venus','Earth', 'Mars', 'Asteroid Belt', 
  'Jupiter', 'Uranus', 'Neptune', 'Saturn', 'Kuiper Belt Objects', 'Pluto', 
  'Charon', 'Eris', 'Ixion', 'Varuna', 'Makemake', 'Haumea', 'Orcus', 'Quaoar', 
  'Varda'];

/*
  Loops
Loops in JavaScript allow us to perform the same action, over and over again,
without having to write out the same code repeatedly. This is can save a lot of 
time and potentially reduce the size of our programs.
    
  Types of Loops
  * For Loops
  * While Loops
  * For-In Loops      
    
  The For Loop
The structure of a for loop is like a simplification of the process of
plotting a sine wave. That is to say, there is a clear start point, a stop point, 
and a measure of change-over-time, which is the "increment" in JavaScript. 

In fact, it's possible to plot sine waves in JavaScript using a for loop!
Although a lot of other work goes into that process, as well. For more info on 
creating an oscillating sine wave in JavaScript, please visit: 

https://gist.github.com/gkhays/e264009c0832c73d5345847e673a64ab
(I think it's pretty cool)  

EXAMPLE: This for loop is designed to "loop through" an array, passed-in to the 
collectiion parameter as an argument, and check each element of the array to 
see if it matches the value of the passed-in argument for the target parameter. 
*/ 

function contains(collection, target) {
    let checkIt = false; 
    for (var i = 0; i < collection.length; i++) {
    // START @ index 0; 
    // STOP @ index value is less than the entire length of the of collection
    // Increment: +1 per iteration 
    if (collection[i] === target) {
      return true;
    }
  }
  return false;
}
// NOTE: const solSystem is defined at the ^top^ of this page 
contains(solSystem, 'Varda'); // logs -> true
contains(solSystem, 'Omicron Perseii 8'); // logs - > false

/* 
  The While Loop 
Unlike for loops, a while loop is not given a discrete stopping point. Instead,
a while loop will continue to carry out its processes for as long as its 
operating conditions remain in effect. In other words, a while loop will 
continuously "do x while y is true." Once the condition is met, the loop stops.     
*/

var countDown = 10; // var countDown :: start at 10

while (countDown <= 10 && countDown >= 0) { 
  // While countDown is less-than OR equal-to 10 
      // AND countDown is also greater-than or equal-to 0,
           // log to the console the current value of var countDown.
 console.log(countDown);
 countDown--; // Incrementation subtracts 1 every iteration 
 }
 
console.log(); 
/*
logs to console ->  0
                    1
                    2
                    3
                    4   */          

/*  
  For-In Loop
A for/in loop is a JavaScript statement that is designed to "loop through" an
object's properties. As with all of the other loops, the code immediately following
the for loop statement will run once for every iteration of the loop. The stop 
condition of a for-in loop is often implicit, as in the example below. 

EXAMPLE: This for-in loop will print the values on the myObject object, stopping
after it has looped-through all of the key: value pairs on the object.        */

var myObject = {}; // Object Literal

myObject.name = "Jackie";
myObject.city = "New Orleans";
myObject.favFood = ["sushi", " beans"];
// Values added to myObject using .dot notation

// For-In Loop to Log key: value pairs in myObject 
for (var key in myObject) {
  console.log(key);
  console.log(myObject[key]);
}
console.log();
/* 
logs -> name
        Jackie
        city
        New Orleans
        favFood
        [ 'sushi', ' beans' ]   */

/*
  Infinite Loops!
With the While Loop especially, beware of infinite loops! If we create a loop
without specifying a STOP condition, we run the risk of creating a block of 
code that will NEVER stop executing the commands it was given, which will crash
our program. :( :( :(

  For-In Infinite Loops
When working with For-In Loops, the syntax of our loop clearly dictates our
Start point, Stop point, and the Incrementation: 

  for (let i = [0]; i <= array.length; i++) <-- Here, the Loop will begin its 
  work at the zeroth index of an array; it will stop its work once it has passed
  through the entire length of the array, but no further; and it will add +1 
  with every iteration. 
*/

// EXAMPLE: 
var alphabits = ['a', 'b', 'c', 'd', 'e']; 
// ^ an array of single character strings

function soup(array) { 
  var sillySentence = ' is my favorite flavor! Yum!';
  for (let i = [0]; i < array.length; i++) {
  console.log(array[i] + sillySentence);
  }
}

soup(alphabits); 
/* fxn call logs -> a is my favorite flavor! Yum!
                    b is my favorite flavor! Yum!
                    c is my favorite flavor! Yum!
                    d is my favorite flavor! Yum!
                    e is my favorite flavor! Yum!
*/                     

/** 
 * In Fxn soup, 'a' is located at index [0], or i = [0];
 * i < array.length simply means that the loop will not run-on *after* 
 * the end of the array; and i++ tells the code to add another go-round to
 * the loop, passing through the alphabits array again. Each pass-through of
 * the array allows the code to print to the console '<letter> is my 
 * favorite flavor! Yum!'
 * 
 * If the STOP point were phrased incorrectly, the code will not function 
 * as intended. For example, changing i < array.length to i <= array.length
 * will cause an additional value of 'undefined' to be logged to the console,
 * after the last version of sillySentence is printed. That's annoying, 
 * but fairly benign.
 * 
 * A problematic error would be changing i < array.length to i > array.length,
 * because this would result in the dreaded INFINITE LOOP! After logging every
 * letter version of sillySentence, the soup function would continuously log
 * 'undefined', until crashing the program. :( :( :( 

  Do-While Infinite Loops
Arguably, it is easier to create the conditions for an infinite loop while 
working with While Loops, as they are not as formally structured as a For-In
Loop. 

Using the same example as used in the Example for While Loops, it's easy to see
how this could happen with a simple reversal of signs.


// EXAMPLE: Infinite While Loop

var countDown = 10; 

while (countDown <= 10 || countDown < 0) { 
  // While countDown is less-than OR equal-to 10
      // OR countDown is  less-than 0
           // log to the console the current value of var countDown.
 console.log(countDown);
 countDown--; // Incrementation subtracts 1 every iteration 
 }
 
console.log(); 
/* 
logs to console ->  0...
                    ...
                    797 ...
                    -3798
                    -3799
                    -3800
                    -3801... < ...you get the idea! >
*/
/**
 * Because the countDown variable can be decreased from 10 an infinite number
 * of times, the while loop *never* stops counting down from zero and  the 
 * program eventually crashes! 
 * 
 * Being more careful with the assignment operators for either value, 10 or 0,
 * or using Logical And (&&) instead of Logical Or (||) would have resulted in
 * code that did not execute *as intended*, but it would not have caused 
 * an infinite loop!
*/  

// EXAMPLE: 

var countDown = 10; 

while (countDown <= 10 && countDown >= 0) {
  // While countDown is less-than or equal-to 10
      // AND countDown is greater-than or equal-to 0
           // log to the console the current value of var countDown.
 console.log(countDown);
 countDown--; // Incrementation subtracts 1 every iteration 
 }
 
console.log(); 
/* logs -> 10
            9
            8
            7
            6
            5
            4
            3
            2
            1
            0
*/            

var countDown = 10; 
while (countDown < 10 && countDown > 0) {
  // While countDown is less-than 10
      // AND countDown is greater-than 0
           // log to the console the current value of var countDown.
 console.log(countDown);
 countDown--; // Incrementation subtracts 1 every iteration 
 }
 
console.log(); // Nothing is logged to the console
  