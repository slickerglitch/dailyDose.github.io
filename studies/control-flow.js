// My 1st Website > Studies Project > Control Flow

/* 

** Control Flow ** 

Control flow can be thought of as the Order of Operations for JavaScript;
it is the order in which the instructions dictated by our code are executed.
     
    ** If-Else If-Else Chains ** 
    
    If-else if- else chains are commonly used in JavaScript to control
the flow of our code's execution. Phrased like a hypothesis, the first link of
the chain—-the if statement——is a (usually) singular statement used to evaluate 
a condition of some sort. Should the condition being checked for by the if 
statement prove to be true, then the code immediately following it will run, 
and no further conditional statements will be evaluated.
        
    Conversely, should that condition evaluate to false, the code following
the if statement will be ignored and the next link in the logic chain——
the else if statement--will be evaluated to see if the conditions for it to
run are true or false. While there is only one if statement in an If-Else If-
Else logic chain, we can include as many else if statements as necessary. Each
one will be evaluated sequentially until a "true" condition is found, at which 
point the code following that else-if statement will run, and no further con-
ditional statements will be evaluated. If two else if statements have
conditions that are considered "true," only the first true else if link in
our logic chain will be evaluated and run, which makes correct ordinal position
of else if statements essential to the function of our code.

    Finally, if neither the initial if statement nor any subsequent else-if 
statements evaluate to "true," then the Else statement will be executed. 
Unlike the If statement and Else-If statements, the Else statement does not 
verify the status of any condition. The code associated with with the else
statement is run unconditionally, as "all else failed" prior to the else state-
ment. Similar to the default case of the Switch Statement, the else statement is
a singular statement that will only run if all previous conditions for execution
of code were *not* met. While we do not have to include an else statement at 
the end of an if-else if chain, it adds a failsafe option that tells our code
how to behave if none of our other instructions were valid. 

    The else statement can be used to help us de-bug our own code. If it is 
executed even though we are *sure* that prior conditional statements should have 
been able to execute their code, then we know that we must review the flow of 
our logic. Implementing else if statements out of sequence can cause our code
to fail unexpectedly, as can faulty use of comparison operators, which are two
instances in which an else statement might run unexpectedly.    */

function controlFlow(input) {
    if (input === 7) {
        return 'The number is 7';
    } else if (input === 7*7) {
        return 'The value is 49';
    } else {
        return 'The value is neither 7 nor 49';
    }
}

controlFlow(7*7);
//The value is 49
controlFlow(7*1);
//The number is 7
controlFlow(8);
//The value is neither 7 nor 49
/*

    ** The Switch Statement ** 

    Similarly to if-else if-else chains, Switch Cases provide us with a means to 
control the flow of our code's execution. Unlike if... else chains, a switch 
statement is intended to provide an expression that will be evaluated, with several
different statements to run if the expression evaluates to a "go" value for that
statement. This makes switch statements a good alternative to if...else chains when
we require more flexibility from a conditional evaluation, or when using
a switch statement would streamline our code and increase its readability.

    Also like if...else chains, once a condition is met that allows a 
statement of code to run, evaluation of conditions stops. However, with the switch
statement, instead of automatically stopping at that block of code, the next 
block of code will run automatically, even if its value would have been a "no-go"
for that case. We can avoid run-away execution of code by inserting breaks at the 
end of our switch-case code blocks.

    Like the else statement, the default statement is not necessary, but it is a 
useful fallback option to include in the event that none of the previous switch
cases run. The only time a default statement should be intentionally excluded is when
it would be absolutely never be run or when it would be redundant, 
like when the cases can only resolve to a Boolean value; in the latter case it 
might very well be more appropriate to employ an if... else logic chain. */ 


let originalRecipe = 'Universe 1';
let remixReality = 'Universe A';
let currentReality; 
    
switch(currentReality) {
  case originalRecipe: 
    console.log('Universe 1');
    break;

  case remixReality: 
    console.log('Universe A');
    break;

default:
    console.log('As Deepak Chopra taught us, quantum physics means anything can happen at any time for no reason...  and animals never had a war.');
}

/**
 * With currentReality declared, but undefined, the switch statement skips down 
 * to the deafault case and logs to console: 
 *      
 *      As Deepak Chopra taught us, quantum physics means anything can happen 
 *      at any time for no reason... and animals never had a war.
 * 
 * However, if the variable is redefined as let currentReality = remixReality,
 * then 'Universe A' is logged to the console. Likewise, if currentReality is 
 * set to let currentReality = originalRecipe, the first switch case runs and 
 * logs to the console 'Universe 1'.
 * 
*/ 

let original = '11 Herbs and Spices';
let spicy = 'Just a whole bunch of cayenne pepper';
let chicken = original;  
    
switch(chicken) {
  case original: 
    console.log('Mmmm!');

  case spicy: 
    console.log('HOT-n-spicy');
    break;

default:
    console.log('Winner winner chicken dinner!');
}

/**
 * In the chicken example above, the break has been omitted from the first 
 * switch case. Because let chicken = original, the first switch condition matches
 * the comparison and the code will run, logging to the console 'Mmmm!' 
 * 
 * If a break has been included before closing that switch case, the code would have 
 * stopped running immediately after logging to console 'Mmmm!' Without the break,
 * however, the code for the second switch case runs without checking its condition
 * against the comparison value. */

