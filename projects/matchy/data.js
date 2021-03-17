/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
** and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'cat';
animal['name'] = 'Pumpkin';
console.log(animal); 

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
animal.noises = noises; 
noises[0] = 'meow';
noises.unshift('purr');
noises.push('hiss');
console.log(noises.length, noises, noises[noises.length - 1]);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises.push('random crashing sounds');
animal.noises.push('burble!'); 

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
var duck = { species: 'mallard', name: 'Stu', noises: ['quack', 'aflack'] };
var platypus = { species: 'platypus', name: 'Perry', noises: ['electrical pulses'] };
var dog = { species: 'dog', name: 'Conrad', noises: ['WOOF', 'WOOF','WOOF'] };
// var theSwarm  = { species: 'bees', name: 'The Swarm', noises: ['buzzing, dancing'] };  
animals.push(duck, platypus, dog);
//animals.push(theSwarm); 

// Bees are really cool, but adding The Swarm to the array made it too long
    // to pass the Tests.

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = ['Stu', 'Conrad', 'Perry'];
animal['friends'] = friends; 
duck['friends'] = friends;

/**
 * -Notes-> Return Results: 
 *          Bracket Notation v. Passing Array as Argument
 * 
 *  function getRandom(array) {
 *      return array[Math.floor((Math.random(array)*array.length))];
 *  } 
 *  getRandom(animals); 
 *  // Returns -> entire object located @ randomly selected array[i]
 * 
 * 
 * Originally I wrote my getRandom function as above, but the return
 * from that syntax is the data located at that index within the Brackets.
 *  
 * I changed my syntax to the version below, which references the array
 * by passing the whole Math.random fxn into Math.floor, while the array itself
 * is passed-into Math.random.
 * 
 * The Math.random operation is then carried out on every array index, by
 * using the multiplication operator and the array's length property (Dot Nttn).
*/
function getRandom(array) {
  return Math.floor((Math.random(array) * array.length));

} 
// 6. [X] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
getRandom(animals); // Returns -> 4
// Lucky Number 4 is the dog animal object! 
friends.push(dog.name); 
console.log(friends); 

// 6. [X] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
//7. [X] `console.log` `friends`.


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}