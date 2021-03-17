My 1st Website > Studies > String-Manipulation

/* 
    STRING MANIPULATION
    There are many JavaScript methods that can be used to manipulate string values.
A few of those are: 
    
    * concat()
    * endsWith()
    * slice()
    * splice()
    * split()
    * startsWith()
    * toLowerCase()
    * toUpperCase()
* toString()
    * trim()

*/
// EXAMPLE: The .trim() method removes white space from both ends of a string.
var saganQuote = ' We are made of star stuff. '
console.log(saganQuote);  
// logs -> ' We are made of star stuff. '
console.log(saganQuote.trim());
// logs -> 'We are made of star stuff.'

// EXAMPLE: String concatenation utilizes the + Operator to assemble discrete
// string values into a new string.
var cosmos = 'The cosmos is within us. ';
console.log(cosmos); // logs -> 'The cosmos is within us. ''

var weAreAWay = ' We are a way for the Universe to know itself. ';
console.log(weAreAWay); // logs -> ' We are a way for the Universe to know itself.' 

var fullQuote = cosmos + saganQuote + weAreAWay;
console.log(fullQuote);
/** logs -> 
'The cosmos is within us. We are made of star stuff. We are a way for the Universe to know itself.'     */

// EXAMPLE: The .substring() method is similar to cutting-and-pasting.
var star = 'twinkle'; 
console.log(star); // logs -> 'twinkle'

var first = star.substring(0,5); // var first will place the Zeroth Indexed value into a substring,
// along with the following values, up to the index number of the second parameter; 5 in this case.
console.log(first); // logs -> twink, as in 'twinkle' 

// EXAMPLE: The .toUpperCase() method changes the case of the letters in a string to uppercase.
var shoutItOut = cosmos.toUpperCase(); 
console.log(shoutItOut) // logs -> THE COSMOS IS WITHIN US. 

// EXAMPLE: the .toLowerCase() method changes the case of the letters in a string to lowercase.
console.log(weAreAWay[22]); // The character at index 22 is currently capital U; logs -> U
console.log(weAreAWay[22].toLowerCase()); // Now, it is little u; logs -> u

var weAreAWay2 = weAreAWay.toLowerCase(); // Here, we are assigning a new, altered version of the string to its own variable.
console.log(weAreAWay2); // logs ->  ' we are a way for the universe to know itself.'

/** EXAMPLE: We can use .toUpperCase() to create a new string value and assign it to a new variable,
then use .toLowerCase() again on the new string value to lower the 'volume' again.     */
var shoutItOut = cosmos.toUpperCase(); 
console.log(shoutItOut) // logs -> ' THE COSMOS IS WITHIN US.'
var stopShouting = shoutItOut.toLowerCase();
console.log(stopShouting); //logs -> ' the cosmos is within us.'