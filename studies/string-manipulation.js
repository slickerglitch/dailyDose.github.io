// My 1st Website > Studies > String-Manipulation

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
// EXAMPLE 1: The .trim() method removes white space from both ends of a string.
var saganQuote = ' We are made of star stuff. '
console.log(saganQuote);  
// logs -> ' We are made of star stuff. '
console.log(saganQuote.trim());
// logs -> 'We are made of star stuff.'

// EXAMPLE 2: String concatenation utilizes the + Operator to assemble discrete
// string values into a new string.
var cosmos = 'The cosmos is within us. ';
console.log(cosmos); // logs -> 'The cosmos is within us. ''

var weAreAWay = ' We are a way for the Universe to know itself. ';
console.log(weAreAWay); // logs -> ' We are a way for the Universe to know itself.' 

var fullQuote = cosmos + saganQuote + weAreAWay;
console.log(fullQuote);
/** logs -> 
'The cosmos is within us. We are made of star stuff. We are a way for the Universe to know itself.'     */

// EXAMPLE 3: The .substring() method is similar to cutting-and-pasting.
var star = 'twinkle'; 
console.log(star); // logs -> 'twinkle'

var first = star.substring(0,5); // var first will place the Zeroth Indexed value into a substring,
// along with the following values, up to the index number of the second parameter; 5 in this case.
console.log(first); // logs -> twink, as in 'twinkle' 

// EXAMPLE 4: The .toUpperCase() method changes the case of the letters in a string to uppercase.
var shoutItOut = cosmos.toUpperCase(); 
console.log(shoutItOut) // logs -> THE COSMOS IS WITHIN US. 

// EXAMPLE 5: the .toLowerCase() method changes the case of the letters in a string to lowercase.
console.log(weAreAWay[22]); // The character at index 22 is currently capital U; logs -> U
console.log(weAreAWay[22].toLowerCase()); // Now, it is little u; logs -> u

var weAreAWay2 = weAreAWay.toLowerCase(); // Here, we are assigning a new, 
                                         // altered version of the string to 
                                        //its own variable.
console.log(weAreAWay2); // logs -> ' we are a way for the universe to know itself.'

 // We can use .toUpperCase() to create a new string value 
 //and assign it to a new variable,
 // then use .toLowerCase() again on the new string value to lower the 'volume' again.     */
var shoutItOut = cosmos.toUpperCase(); 
console.log(shoutItOut); // logs -> ' THE COSMOS IS WITHIN US.'
var stopShouting = shoutItOut.toLowerCase();
console.log(stopShouting); //logs -> ' the cosmos is within us.'
/**
 * Example 6:
 *      string.replace()
 *          ^^^^
 *      This String method can be used to `replace` a character 
 *      of a String value. 
 * 
 *  However, Strings are a Primitive value, and Primitives are immutable, 
 *  meaning that the original String value can't actually be modified.
 * 
 *  Instead a copy of the input String--sans the undesriable String 
 *  element AND replaced with a different value, or even no value!--is 
 *  the value Returned to us, as below: 
*/  
const weString1 = 'We string';
const weString2 = 'string alike';
const weSing1 = weString1.replace('tr', '');
const weSing2 = weString2.replace('tr', '');
console.log(weSing1 + ' and ' + weSing2 + '!'); // Logs > We sing and sing alike!
/**
 * But the .replace() Method only works on the first
 * instance of the `pattern` its replacing. 
 * This means that it would not work to change the strings in the `weString` 
 * variables above if both instances of the pattern `tr` occurr in the same
 * string, as follows: 
*/ 
const stringAlong = weString1 + ' and ' + weString2 + '!';
console.log(stringAlong); // Logs > We string and string alike!
const singAlongOops = stringAlong.replace('tr', '');
console.log(singAlongOops); // Logs > We sing and string alike!
                           // `We sing and string alike?` 
                          //What goofs we are!
/**
 * If we want to remove every instance of a pattern from a String,
 * we must call on the power of:
 *  
 *          REGEX!
 * 
 * 
 * Regex is short for `Regular Expression`, which is just another way of 
 * saying `pattern`. In other words, the Regex expressions can be single 
 * characters or groups of characters, but they must occur more than once
 * (e.g. regularly) to work as a regex value in the .replace() Method.
*/  
const singAlong = stringAlong.replace(/tr/g, '');
console.log(singAlong);  // Logs > We sing and sing alike!
                        // Now you're talking! Or should I say `singing`?
/** 
 * The `/g` group that comes after the group representing the String 
 * value (`/tr`) indicates that `tr` should be replaced by an empty String (''), 
 * AND that it should be replaced everywhere it occurs in the String value 
 * belonging to the variable chained before the Dot (.) in .replace().
 * 
 * In the example above, replacing the value of stringAlong with a new value of
 * stringAlong.replace(/tr/g, '') allows the original string to go from:
 * 
 *          'We string and string alike!'   // original string
 * 
 *                  to 
 *  
 *          'We sing and sing alike!'       // replacement string
 * 
 * Whereas in the example of `singAlongOops` the original string is replaced
 * by another incorrect variation, as only the first `tr` group (or pattern)
 * was correctly replaced with nothing (no space, The Empty String). Instead of 
 * the desired new string, we got another silly version: 
 * 
 *          'We sing and string aline!'     // singAlongOops variant
 * 
*/  