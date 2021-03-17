//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object); 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    /*
    let keyArr = Object.keys(object);
    return keyArr.split.().join(' ');
    */
    return Object.keys(object).join(' ')

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

    let stringArr = [];
    for(var value of Object.values(object)){
        if(typeof value === 'string'){
            stringArr.push(value)
        }
    }
    return stringArr.join(' ')
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {

   return  Array.isArray(collection) ? 'array' : 'object';
   
}

/*
function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array'
    }
    if(typeof collection === 'object'){
        return 'object'
    }
}
*/

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    return string[0].toUpperCase() + string.substring(1); 
 
}
 //var cap = string[0].toUpperCase();
    //var ironman = string.substring(1);
    // I used .substring() here in a new var, rather than .slice
    // return cap + ironman;
    // Fxn returns concat'd values of vars cap & ironman


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var words = string.split(' '); 
    for (var i = 0; i < words.length; i++) { 
        var word = words[i];
        words[i] = word[0].toUpperCase() + word.slice(1);
    } 
    return words.join(' '); 
    
        
}

/**
function welcomeMessage(object) {
return 'Welcome ' + capitalizeWord(object.name) + '!'
}
*/
    
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
     for (var key in object) {
         
         let name = object['name'];
         let firstLet = name[0].toUpperCase(); 
         let split = name.slice(1);
         let firstName = firstLet + split;
         let message = 'Welcome ' + firstName + '!';
         
         return message; // returns message 'Welcome <Name>!'
         
        } 
    
}
/**
function welcomeMessage(object) {
return 'Welcome ' + capitalizeWord(object.name) + '!'
}
*/

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** 
 * const objToInput = { name: 'Stu', species: 'duck };
 * profileInfo() : Should take an object with a name an a species 
 *  and return '<Name> is a <Species>' 
*/
function profileInfo(object) {
    //return object['name'][0].toUpperCase() + ' is a ' + object['species'][0].toUpperCase();
    return object['name'].charAt(0).toUpperCase() + object['name'].substring(1) + ' is a ' + object.species.charAt(0).toUpperCase() + object.species.substring(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // * Note: similar to some of the work I did on matchy
    
    if (object.noises === undefined || object.noises.length === 0) {
    // If the value of object.noises strictly equals undefined
        // OR the value of object.noises is strictly equal to 0,
        return 'there are no noises';
            // then return string above.
            
            } else {
                return object.noises.join(" ");
            // Otherwise, return the noises array joined at the spaces between elements.
            }
    
}
/**
function maybeNoises(object) {
    if (object.noises && object.noises.length > 0){
    
        return object.noises.join(' ')
    }
    else return 'there are no noises'
}
*/


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * hasWord() : Should take a string of words and a word and 
 * return true if <word> is in <string of words>,
 * else false.
 * 
 * -Note-> The task here is to "find a String within a String"
*/

/** Similar Fxn: 
 *      var quickUnderscores = 'quick_brown_fox';
 *      
 *      function strReplace(string) {
 *          let oldString = string; 
 *          let newString = oldString.replace(/_/g, ' ');
 *      }
 * 
 *      strReplace(quickUnderscores); 
 * 
*/

function hasWord(string, word) {
    if(string.split(' ').includes(word)) {
       return true
   }
   else return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    
        object.friends.push(name);
        return object;
}
 


//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (Object.values(object).length === 0) {
        return false;
        
    } else if (object.friends.includes(name)) {
        return true;
        
    } else {
        return false;
        
    }
}
/*
function isFriend(name, object) {
    //if (Object.values(object).length === 0) {
      //  return false;
      //} else 
    if (Object.values(object).includes(name)) {
        return true;
        
    } else {
        return false;
        
    }
}
*/ 
       // If the value on the object is strictly equal to zero,
            // false is returned. 
        // If the any value on the object includes the passed-in name,
            //then true is returned!
        // If neither preceding condition holds, false is returned.
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//function nonFriends(name, array) {
/* ** Fxn nonFriends is intended to make a list of everyone who dislikes
    * the object passed-in to the name parameter as an argument. */   

function nonFriends(name, object) { // { 1 }
    // Param name is the name of a person object
    // Param object is an array on the person object, 
        // which may or may not contain an array of strings representing friends' names
    var nameList = [];
    // created an empty Array to contain a list of all potential friends
    
    var unfriendly = [];
    // created an empty Array to contain the list of non-friends
    
    var current = null; 
    // set current friendship status to null, as I want that value empty for now;
        // if the current value of current === null, 
        // then push the values of the entire nameList into the unfriendly array.
        // If current != null, then the named person already has friends.
    
    for (var i = 0; i < object.length; i++) { // { 2 }
    
        if (name === object[i].name) { // { 3 }
            current = object[i];
            
        } else { // { 7 } 
    //{ ^3 } 
    
        nameList.push(object[i].name);
        } // { 7 } 
        
    } // { 2 } 
    
    // If the current status of having friends *IS* null :(
    if(current === null) { // { 4 }
   
        return nameList;
        // So, return nameList for push into unfriendly Array
        
    } // { 4 } 

    for (var i = 0; i < nameList.length; i++)   { // { 5 }
    
        if (current.friends.indexOf(nameList[i]) == -1) { // { 6 }
            // I used loosely-equal-to; tests failed with strictly-equal-to
            unfriendly.push(nameList[i]);
            
        } // { 6 } 
        
    } // { 5 } 

    return unfriendly; 
    // return unfriendly Array, which now holds the entire nameList 

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
    let keyArr = [];
    keyArr.push(Object.keys(object)); 
    
    for (let i = 0; i <= keyArr.length - 1; i++) { 
        if (keyArr[i] !== object.key) {
            object[key] = value;
        }
            return object; 
            
  }//object.key = value; 
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
function removeProperties(object, array) {
    let propArr = Object.entries(object);

        for (let i = 0; i <= array.length - 1; i++) {
            if (array[i] === propArr) { 
            delete object.key; 
        }
    }
    return object; 
}
*/
function removeProperties(object, array) { // Fxn Opn
    
    if (array.length < 1) { // If the array does not exist, return the object.
        return object;
    }
    
    for (var i in array) { 
        if (object[array[i]].length > 0 || typeof object[array[i]] === 'boolean') {
            delete object[array[i]]; // SEARCH and DESTROY! 
            }
        
    } 
    return object; // Return input object, sans array value targeted for DESTRUCTION
} 


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    /*
    let noDoOvers = [];
    
    for (let i = 0; i <= array.length - 1; i++) { 
        if (noDoOvers[i] !== array[i]) { 
            noDoOvers.push(array[i]);
        }
    }
    return noDoOvers;
}
*/
    let noDup = Array.from(new Set(array));
  // The variable noDup is assigned the value of a new Array created from a new Set,
        // which was created using the input array value.
        
    return noDup;
    // The Fxn returns the noDup variable's value.
    
    
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}