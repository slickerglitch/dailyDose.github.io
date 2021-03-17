// My 1st Website > Studies > Scopes
/*
What is scoping?
What are the different scopes in JavaScript?
What variables are bound to those scopes?
There is a variable in the global scope and a parameter with the same name, if you are within the function body which would you access? If you were in the global scope which would you access? Why?

How are variables hoisted in JavaScript?
How are function declarations hoisted? How are function expressions hoisted?
What is the JS Interpreter 
*/

/*      SCOPE 
    In Javascript, there are two different Scopes:
        
        * Global
        * and Local
    
    Scope is the area-of-influence of the variables we create in JavaScript.
        * If a variable is created in the Global scope, it can  be 
        accessed from anywhere in that code.
        * If a variable is created in Local scope, its influence & accessibility
        are limited to the scope in which it was defined.  
            * Variables defined within the scope of a Function
            are an example of local--or block--scope, 
            as they are limited to the Function in which they were defined.
            
    * The very simple function before is an example of a variable defined to
        the local scope of a Function.
            * Calling the function with arguments of (1,2) returns 16,
            which is the expected output.
            * If I try to access the localScopeVar without calling the Function,
            it throws a ReferenceError, because the Interpreter can't 
            access its information within the Global scope!
*/

    function simple(a, b) {
        var localScopeVar = 13 + a + b;
        return localScopeVar; 
    }

    simple(1,2); // Fxn Call returns 16

    // localScopeVar++; // throws ReferenceError: localScopeVar is not defined
    
/*
        VARIABLES AND THEIR SCOPE
    Different variables are defined according to their specific Keywords,
    which determine their behavior, including their behavior in regard to Scope.
    
    The variable keywords we use are:
        
        * var,
        * const,
        * and let
        
    Although I am most used to using var (for now, anyway!), const and let are
    often preferred over var. The behavior of var is more free-spirited
    than that of let or const.
    
    ///////////////////////////////////////////////////    
    Keyword |    Scope   |      Hoisting
    
    var         global,     to the top of its scope
                local
    
    let         block       to the top of its scope
    
    const       local       to the top of its scope
    ///////////////////////////////////////////////////

        
        FUNCTIONS & HOISTING
    Functions are affected by hoisting, as well, but not in quite
    the same way as variables.
    
    Function declarations are hoisted, but function expressions are not!
    
    This is still a bit of a weird concept to me, but I am working on
    fully conceptualizing it.
    
    
        FUNCTIONS & VARIABLE HOISTING PRECEDENCE
    As you might expect, because both variables and functions are affected
    by hoisting, there is a difference in how they are hoisted:
    
        * Function declarations are hoisted -over- variable declarations
        
        * Function declarations are NOT hoisted over variable -assignments-
        
    In other words, when we assign a variable, it takes precedence
    over the declaration of Functions. But the declaration of a function
    takes precedence over the declaration of a variable.
    
*/