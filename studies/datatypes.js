/* 
    DATATYPES
There are two main categories of Datatypes:
    Primitive & Complex
    
    Primitive datatypes include: 
    * Number,
    * String,
    * Boolean,
    * NaN,
    * Undefined, and
    * Null
        
    Complex datatypes include: 
    * Object, 
    * Array, and 
    * Function

   THE 6 PRIMITIVES
1. Numbers can have mathematical operations performed on them.

2. Booleans resolve to a true or false value

3. Strings are composed of characters inside quotations.

* Strings cannot have mathematical operations performed on 
them, unless the String value they contain is coerced into 
a Number value.
    
* The individual characters that compose a string are each 
stored in their own index value within the string; like 
apartments in an apartment building, all of the characters 
of a given string are contained within the string value as 
a whole, but each character can be located at its individual 
index "address."
    
* In JavaScript, Strings are one of several immutable 
datatypes, which means that we cannot change them after they 
have been created. However, we can still utilize string 
indexes to access information about the values attached to a
given string. 
    
* Index values would be useless if we did not have tools to 
help us find the index "address"——or addresses--of the 
string value(s) on which we wish to implement a string method. 
Similarly to Arrays, we can use the length property of a string 
to help us find out what we want to know. */

// EXAMPLE:
var sphinx = 'Sphinx of Black Quartz, hear my vow!';
console.log(sphinx.length); // logs -> 36
console.log(sphinx.length - 1); // logs -> 35
console.log(sphinx[sphinx.length - 1]); // logs -> !
console.log(sphinx[0]); // logs -> S
console.log(sphinx[5]); // logs -> x
console.log(sphinx[6]); // logs -> 
console.log(sphinx[7]); // logs -> o        
/*
* Empty spaces are NOT empty! It is important to note that a 
space, while an "invisible" character to us, is seen by 
JavaScript as its own distinct value and is therefore given
an Index space of its own to occupy, as in the example above.

* Various JavaScript Methods for modifying existing Strings into 
new, altered strings depend upon this ability to tell the 
method-of-choice exactly where to start its work. 

Notable examples include the following Methods: 

    * .slice
    * .split
    * .substring
    * .join
    * .toUpperCase() and .toLowerCase()
            
* Strings cannot be altered, so the methods mentioned above work in 
a "cut-and-paste" fashion, by "cutting" at a specified index point 
and then, in certain cases, reassembling a new String beginning at 
another specified index point. The substring Method provides a good 
illustration of this.
    
//EXAMPLE:
Method substring extracts characters beginning at input Index 
in parentheses, stopping at the second number (if provided). 
If the starting value is 0, only the 1st character is extracted.
    In the code snippet below, star.substring(0,5) would begin 
"cutting" at the first character and STOP "cutting" AT the 5th 
character, excluding the fifth character and any values located 
at higher indexes. The characters that are "cut" out of the original 
string are then "pasted" into a new substring.        */

var star = 'twinkle'; // string of 'twinkle' assigned to var star
var first = star.substring(0,5); 
// var first will place the Zeroth Indexed value into a substring
console.log(first); // logs -> twink, as in 'twinkle' 

/*
4. Undefined is the datatype that represents information that 
has been unintentionally excluded.
    * You can think of undefined as the contents of an 
    empty container,
    * OR you can conceptualize it as an empty space held 
    in memory, that does not *yet* contain any data.
    * Undefined values are NOT the same as null values.
    
5. NaN is a property that represents the value of "Not-a-Number".
    * NaN values can be generated when arithmetic operations 
    result in values that cannot be represented by a Number.
    * While NaN does not represent any real Number, it has 
    the Number Type.
    * There are two built-in JavaScript Fxns to check for NaN:
        * Number.isNaN(), 
        * and isNan()
    * Curiously, NaN isn't equal to any value, even itself.     */ 
 
    
// EXAMPLE: This weird quirk of NaN can be used to check for NaN!
var nanCat = NaN;
if (nanCat !== nanCat) {
  console.log('Not-a-Number!'); // Check for NaN
} else {
  console.log('Not NaN'); // logs 'Not-a-Number!'
} 
/**    
 
6. Finally, Null is the true oddball of the Primitives.

    * Null is used when a programmer intends for a variable to 
    have no value.
    * The typeof Operator will not work with Null values! This 
    is because Null is hardcoded to return 'object' for its type. 
    This behavior of Null is sometimes said to be caused by 
    a Bug in the code.
    * Null is unique!
    * Null is neither strictly-equal-to (===) nor loosely-equal-to 
    (==) any other falsey values.
    * Null is only loosely-equal-to (==) itself and to Undefined.
    * As a falsy value, Null evaluates to false if coerced to a 
    Boolean or in conditional statements.       */
    
//EXAMPLE:     
var nullIsNotDull = null;
if (nullIsNotDull == null || nullIsNotDull != undefined) {
    // Checking for Null:
    console.log('null'); // logs 'null'
} 
/** 
 
    THE 3 COMPLEX DATATYPES 
    
    Arrays (1a)
An Array is a single variable that can contain multiple elements.
These array elements can be of any datatype, such as: Numbers, 
Strings, Booleans, and even other Arrays! 
    Arrays are created using brackets [], in which their elements
 are stored, separated by a comma. 
    Arrays are orderly! Arrays maintain their orderliness by 
storing each element at its own "address," which is know as its 
Index. We can use Index information to find out general 
information about an array, as well as to access the values stored 
at any location on the array, as long as we can specify that 
location (more on that below). 

// EXAMPLE: Sample Array 
This sample array holds info about 1 Number and 4 Strings.    
*/ 

var crystalArray = [
    4, 
    'covalent', 
    'ionic', 
    'metallic', 
    'molecular'
    ];     

/*     
    Accessing Elements on an Array (1b)
Javascript arrays are list-like objects the prototype of 
which has myriad methods that allow us to perform various
operations on the data arrays aggregate. As one of the three
complex datatypes in JavaScript, arrays can expand or shrink 
in size in relation to their associated data. 
    Arrays can store data discontiguously, but maintain order by 
storing values--or references to values held elsewhere in 
memory--according to the ordinal index, beginning at [0]. The
sample array above has a total length of 5, to accommodate all 
of the elements on the array. The Number 4 is located at 
index [0], while the String value of 'molecular' is located 
at index [4], or crystalArray.length - 1.

    Dot Notation and Arrays
Dot notation can be used to *traverse* an array, but not 
to access the properties on an array:
*/ 

const chemX = {
    
    radioactive: true, 
    sideEffects: [
        'flight', 
        'super strength', 
        'nigh invulnerability'
        ], 
        kgNt: 2.5, 
        kgN0: 2.1, 
        minsT: 19.88
    
};

const formula = [
    'sugar', 
    'spice', 
    'everything nice', 
    chemX];

console.log(formula); 
/*  logs -> [
            'sugar',
            'spice',
            'everything nice',
            { <chemX values> }
        ]
*/ 

/*
    Bracket Notation and Arrays
To access any specific information about a property of an 
element on an array, we must use bracket notation, either alone 
or in tandem with dot notation. 
*/ 
console.log(formula[0]); 
// logs -> sugar
console.log(formula[1]); 
// logs -> spice
console.log(formula[2]); 
// logs -> everything nice 
console.log(formula[3]); 
/* logs -> {
        radioactive: true,
        sideEffects: [ 
            'flight', 
            'super strength', 
            'nigh invulnerability' 
            ],
            kgNt: 2.5,
            kgN0: 2.1,
            minsT: 19.88
        }   
*/ 

console.log(formula[3].sideEffects[0]);
// logs -> flight 
console.log(formula.length - 2); 
// logs -> 2
console.log(formula[formula.length - 2]); 
// logs -> everything nice 

/**
    Objects (2)
Objects are similar to Arrays in that they can store different 
types of data. However, objects store data in an unorderly fashion 
by arranging specific sets of data into linked dyads, 
known as 'Key-Value Pairs'. 
    A Key-Value Pair dyad consists of the 'key' of a specific 
set of data, as well as its value 'match'. To access the elements 
of an Object, we reference the object's Key:Value pairs.
*/
//EXAMPLE: Accessing Object & Manipulating Properties       
const powerpuffGirls = {
  red: 'Blossom', // key = red; value = 'Blossom'
  blue: 'Bubbles', // key = blue; value = 'Bubbles'
  green: 'Buttercup' // key = green; value = 'Buttercup'
};

console.log(powerpuffGirls.red); 
// Using dot.notation
// logs -> Blossom
console.log(powerpuffGirls['blue']); 
// Using bracket [notation]
// logs -> Bubbles
console.log(powerpuffGirls[powerpuffGirls.length - 1]);
// logs -> undefined
console.log(powerpuffGirls.length); 
// logs -> undefined 
// Objects do not have a length property like an Array!

//EXAMPLE: List the enumerable properties of an object.
console.log(Object.keys(powerpuffGirls));
// Using Object.keys()
// logs -> [ 'red', 'blue', 'green' ]
console.log(Object.values(powerpuffGirls));
// Using Object.values()
// logs -> [ 'Blossom', 'Bubbles', 'Buttercup' ]

//EXAMPLE: Add new key-value pairs with dot notation. 
powerpuffGirls.yellow = 'Princess';
console.log(powerpuffGirls);
/* logs -> 
    {
    red: 'Blossom',
    blue: 'Bubbles',
    green: 'Buttercup',
    yellow: 'Princess'
    }
*/
//EXAMPLE: Bracket notation to update an Object's properties.
powerpuffGirls['save the day'] = true; 
console.log(powerpuffGirls); 
/* logs -> 
    {
    red: 'Blossom',
    blue: 'Bubbles',
    green: 'Buttercup',
    yellow: 'Princess',
    'save the day': true   
    // ^-NOTE--the spaces require the addition of quotes
    }

/**
    Functions (3)
* Functions are fundamental to JavaScript's functionality!

* Functions have the potential to become infinitely complex.
    
* Functions can contain different datatypes, including: 
    * Primitive/Simple Datatypes
    * Arrays and Objects
    * and other Functions!
        
* Functions allow us to perform more complex operations   */

// EXAMPLE: 
// (this example is taken from a homework assignment I completed)
function createGreaterThanFilter(base) {
    return function(number) { // This Fxn returns another Fxn!
    if(number > base) {
      return true;
    } else {
      return false;
    }
  }
}

var compare = createGreaterThanFilter(13); // input value is 13
compare('17');  // given value is 17, returns true

/**
    INFINITY AND NEGATIVE INFINITY
Infinity is a property of JavaScript's global scope, 
so its value can be accessed from anywhere. Although Infinity 
is qualified/quantified as a Number type, it behaves a bit 
differently from other Number values.   */
    
// EXAMPLE: Positive Infinity is the largest possible Number value. 
console.log(Infinity); // logs -> Infinity
console.log(Infinity + 1); //logs -> Infinity
/**
 * Infinity is read-only.
 * Infinity is not the same as the mathematical Infinity property,
which is qualified/quantified as Number.POSITIVE_Infinity
 * Negative Infinity (-Infinity) equates to being the same as 
the negative value of global Infinity's value.       */

// EXAMPLE: -n * n = -n
console.log(Number.NEGATIVE_INFINITY === Infinity * -1); // true
/** 
 * --NOTE-> as a static property of Number, ALWAYS use Negative 
Infinity as Number.NEGATIVE_INFINITY and NOT as a property of 
a programmer-defined Number.      



    COPY-BY-VALUE V. COPY-BY-REFERENCE
    
    Copy-by-Value
In Javascript, the Primitive Datatypes contain "copy-by-value" 
values. Simply put, this means that when a variable is 
initialized to a value, that value can be considered to 
exist inside the container of its variable. If we need that same 
value to be put to use elsewhere in our code, we can "copy-by-value" 
and create an identical duplicate to place into a new container. 
    In this sense, copying by value is like taking an original, 
handwritten letter in an addressed envelope and using a Xerox to 
create a copy of the letter, which we place into a new envelope and 
then label with a different address.    */ 

//EXAMPLE: Change of address.
var hickoryStreet = 'Dear, Gerard...'; // logs -> 'Dear, Gerard...'
var dickoryDrive = hickoryStreet; // logs -> 'Dear, Gerard...'
/** 

    Copy-by-Reference
When we copy the values of Objects, however, we do not create a 
new data copy that can be passed around. Instead, copy-by-reference 
values are not the actual values, but information ABOUT the values. 
This information can be 'deep' or 'shallow', depending upon how much 
detail is being referenced from memory. As the name suggests, nothing 
is actually copied from one place to another and the original 
value maintains its original "address". 
    In this way, "copy-by-reference" is like a Wikipedia citation. 
The information contained within an article has been taken from 
the a different, possibly more detailed source of information. 
The citations provided at the end of a Wikipedia article will 
direct the reader back to the context in which the data was originally
defined and where it is still primarily stored.         


// EXAMPLE: Copy-by-Value

Although twasBrillig and allMimsy are discrete variables 
with unique names, the data contained in twasBrillig can easily 
be copied by assigning allMimsy the same value as is contained 
in twasBrillig.   
*/

let twasBrillig= [
    'and the slithy toves...', 
    '...were the borogroves',
    ', and the momewraths outgrabe'
    ];
    
let allMimsy = twasBrillig;

console.log(twasBrillig); 
/* logs ->  [ 'and the slithy toves...',
            '...were the borogroves',
            ', and the momewraths outgrabe' ] */

console.log(allMimsy);
/* logs ->  [ 'and the slithy toves...',
            '...were the borogroves',
            ', and the momewraths outgrabe' ]    
            
// EXAMPLE: Copy-by-Reference 
Even though const jabberwock and const jabberwocky each have 
an identical set of key:value pairs, the information is stored 
at different points in memory, so a strict comparision 
returns false.
*/

const jabberwocky = { 
    'jaws': 'that bite', 
    'claws': 'that catch', 
    dead: true};
    
const jabberwock = { 
    'jaws': 'that bite', 
    'claws': 'that catch', 
    dead: true};

console.log(jabberwocky === jabberwock);
// returns => false



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
console.log(shoutItOut) // logs -> '' THE COSMOS IS WITHIN US.''

var stopShouting = shoutItOut.toLowerCase();
console.log(stopShouting); //logs -> ' the cosmos is within us.'
