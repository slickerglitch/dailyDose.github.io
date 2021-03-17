// My 1st Website > Studies > Hoisting


/*
        WHAT IS HOISTING?
    In JavaScript, hoisting is the process through which the
    JavaScript interpretor translates our code into something 
    meaningful. While the code isn't actually moved anywhere,
    hoisting refers to the hierarchy the interpreter applies
    to different containers of information in our code, 
    like variables and functions.
    
        VARIABLES & HOISTING
    Different variables are defined according to their specific Keywords,
    which determine their behavior, including their behavior in regard to Scope.
    
    The variable keywords we use are:
        
        * var,
        * const,
        * and let
        
  
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


