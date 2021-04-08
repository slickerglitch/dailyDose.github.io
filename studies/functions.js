
/*
  Functions
Functions are fundamental to the functionality of our code!(haha)
They allow us to perform actions and build increasingly complex processes. The
JavaScript methods we use everyday are themselves actually just functions
that are stored in a property on an Object.

A Function is a type of data so, like any other piece of data in JS, 
functions can be passed into the parameters of another function as arguments.
Also like any other datatype value in JS, functions can be stored in variables
as the value of that variable. This means that functions can be stored in
Object properties, Array elements, and even variables.

This last instance--called function expression--is shown below:
*/ 
var addTwo = function(num, fxn) { 
  console.log(num + fxn());
};

addTwo(28, function() { return 28;}); //Logs > 56;
/* Directly above this line, we can see the Function Call, which
   is written as: 
   
        functionName(param1, param2);
    
    The Function Call is a command that gets our function's attention
    and puts it to work. You can call a function anything you want,
    just call it by name! The Function Call notifies the function to do
    its work on the argument values contained in the Call. The arguments
    will be passed-into the Function's parameters, and the the instructions
    in the Function carried out, at execution time. 
    
    Parameters are just placeholders, like name placards on a dining table,
    which let potential guests know where they should specifically sit. The
    arguments that are passed-in to the parameters are the actual values
    that the Function will utilize. Every instance of the parameter's name
    will be replaced by the appropriate argument. 
    
    Params in the Example Above:
   
      param1 = 28 | num = 28
      param2 = function() {return 28;}); || fxn() = fxn(function() {return 28;});));
    
    Without a Function Call,
    we would not be able to access our functions in order to utilize them. 
    Just like any other value in JavaScript, a function must be named in 
    order to be utilized more than once. Anonymous functions are un-named
    and temporary, like the one passed-into the second parameter of Fxn 
    addTwo, and are not held in memory, as they have no name for us to 
    use to retrieve/reference in the future. The Fxn addTwo, however,
    remains accessible to us through the Function Call thanks to its unique name!
  
    The addTwo example above also illustrates the process of passing a 
    function into another function as a value. The second parameter 
    of the addTwo() Function Call is an anonymous function that will 
    act as a callback function at runtime. As an anonymous function, it
    will no longer exist after that instance of the Function's execution. For
    the next run of addTwo, new values would need to be used as arguments. 
    
    But anonymous functions don't get to have all the fun! 
    Named functions can be passed in as arguments, just as well, as
    shown in the following example: 
*/ 

let string1 = ['ignore me']; let string2 = ['star', 'light'];

var modCaps = function(input) { 
  let storage = [];
  for (let i = 0; i <= input.length - 1; i++) { 
    storage.push(input[i].toUpperCase());
  }
  return storage.join('');
};
    
var mod2 = function(input) { return input.split('').join('*');};

function modifyStrings(strings, modify) { 
  var newArray = [];
  for (let i = 0; i < strings.length; i++) { 
    newArray.push(modify(strings[i]));
  }
  return newArray;
  
}

modifyStrings(string2, mod2); 
// => Returns ['s*t*a*r', 'l*i*g*h*t'];