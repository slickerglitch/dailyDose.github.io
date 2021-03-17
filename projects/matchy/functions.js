/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * 2. Implement a function declaration called `search` that:
 * - Takes a paramater representing an Array of `animals`.
 * - Takes a paramater representing a String, the name of an animal on which to perform a search.
 * - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
 * - Returns `null` if no animal with that name exists
 * 3. Use the search bar at the top of the page to make sure your function works.
*/
function search(array, object) {
    // array @ Param accepts an array as an argument
    // name @ Param accepts a String value as an argument
    for (var i = 0; i <= array.length - 1; i++) { 
        if (array[i].name === object) {
            return array[i];
            
        }
    }
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * 1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
 * - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
 * - If an animal with that name exists within the `animals` Array, remove it.
 * 2. Test that it works on the website.
*/
function replace(array, name, object) {
    // array @ Param accepts an array as an argument
    // name @ Param accepts a String value as an argument
    
    for (var i = 0; i <= array.length - 1; i++) { 
        
        if (array[i].name  === name) {
            return (array[i] = object);
            
        }
        
    }
    return null;
    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * 1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
 * - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
 * - If an animal with that name exists within the `animals` Array, remove it.
 * 2. Test that it works on the website.
*/  
function remove(array, name, object) {
    // array @ Param accepts an array as an argument
    // name @ Param accepts a String value as an argument
    for (var i = 0; i <= array.length - 1; i++) { 
        
        if (array[i].name === name) {
            array.splice(array[i]);
        }
    }

}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * 1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
 * - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
 * - Checks that the animal Object has a `name` property with a length > 0.
 * - Checks that the animal Object has a `species` property with a length > 0.
 * - Has a **unique** name, meaning no other animals have that name.
 * - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
 * - Make sure it works.
*/

function add(animals, animal) {
    
    if(animal.name.length > 0 && animal.species.length > 0) {
        var counter = 0;
        
        for(var i = 0; i < animals.length; i++) {
            if(animals[i].name === animal.name) {
                counter++;
                
            }
            
        }
        if(counter === 0){
            animals.push(animal);
            
        }
        
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
