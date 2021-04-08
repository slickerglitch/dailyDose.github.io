// #!/usr/bin/env node
'use strict';

var customers = require('./data/customers.json');
// npm i lodown-jackie60 // <- npm install command for lodown package
const _ = require('underbar');
// const _ = require('lodown-jackie60'); <-- old lodown


/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 * 
 *      npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 * 
 *      npm start --prefix ./jackie60.github.io/projects/let-s-get-functional <-- my let-s-get-functional filepath
 * 
 * 
 * 
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//var maleCount = _.filter(array) {
let maleCount = function(array) { 
  return array.filter(customers => { 
    return customers.gender === 'male';
  }).length;
};

var femaleCount = function(array) { 
  return _.reduce(array, function(previousResult, element, index, array) { 
    if (element.gender === 'female') { 
      previousResult += 1; 
      return previousResult;
    }
    return previousResult;
  }, 0);  
};
/*
var nonBinaryCount = function(array) { 
  return array.filter(customers => { 
    return customers.gender === 'neutral' || customers.gender === 'non-binary';
  }).length;
};
nonBinaryCount(customers); 
*/ 

// 3 // Oldest Customer Name //
var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(old, customer){
        if(!old){
            old = customer;
        }
        else if(old && customer.age > old.age){
            old = customer;
        }
        else if(old && customer.age <= old.age){
            old = old;
        }
        return old;
    }).name;
    return oldest;
};


// 4 // Youngest Customer Name // 
var youngestCustomer = function(array){
  let youngestAge = 1000;
  let youngestName = "";
  _.forEach(array, function(personObj){
      if(personObj.age < youngestAge){
          youngestAge = personObj.age;
          youngestName = personObj.name;
      }
  })
  return youngestName; 
};


// 5 // averageBalance //

var averageBalance = function(array){
    let balance = _.reduce(array, function(total, customer){
        return total + parseFloat(customer.balance.replace( '$', '').replace(',', ''))
    }, 0)
    let average = balance / array.length
    return average
};
/** 
 * 
 * Old Version: 
 * 
    averageBalance = function(array) {
      let femaleCustomers = [];
      each(_.partition(array, function(customer) {
        return femaleCustomers.push(customer.gender === 'female');
        
      }), function(partition) { 
          each(partition, function(customer) {
            console.log(customer.gender);
            return femaleCustomers.length;
        });
    });
    console.log(femaleCustomers);
    return femaleCustomers.length;
  };
  
  * 
  * 
  * 
*/



var firstLetterCount = function(array, letter) {
  return _.reduce(array, function(count, customerObj){
    if(customerObj.name[0].toLowerCase() === letter.toLowerCase()) {
      count += 1;
    }
    return count;
  }, 0);
};


/** 
 * 
 * Old Version: 
 * 
 *  var firstLetterCount = function(array){
 *    _.filter(array, function(customerObj, char){
 *      return customerObj.name[0].toLowerCase() === char;
 *     }).length;
 *  };
 * 
 * 
 * 
*/ 


var friendFirstLetterCount;
friendFirstLetterCount = function(array, name, target) {
  let friendNames; // <- This var will be intialized to an array value.
  let letterTally = 0; // <- This var is a counter variable, starting at 0.
  
  for (let i = 0; i < array.length; i++) { 
    if (array[i]['name'] === name) { 
      friendNames = (array[i]['friends']);
    } // closing the above If-stat
  } // closing the above For-Loop
  
  console.log(friendNames); // viewing the friendNames array
   
  for (var i = 0; i < friendNames.length; i++) { 
    if (friendNames[i]['name'][0].toLowerCase() === target.toLowerCase()) { 
      letterTally++; // 
     } // closing the above If-stat
  } // closing the above For-Loop
    return letterTally; 
};



// 8 // friendsCount // 
var friendsCount = function(array, name){
    let hasFriend = _.filter(array, function(customer){
        
    for(let i = 0; i < customer.friends.length; i++){
        if(customer.friends[i].name === name){
           return customer
        }
        
    }
        
    });
    return _.pluck(hasFriend, 'name')
};



// 9 // topThreeTags
let topThreeTags = function(arr) {
    var result = [];
//assign the variable of tagsArray to a reduced version of the input array.
var tagsArray = _.reduce(arr, function(acc, curr){
    //get the tags from the current customer object and let it equal tags
let tags = curr.tags;
//concat all tags from each person into empty seed array
acc = acc.concat(tags); 
     return acc;
},[]);
// console.log(tagsArray);
//code that counts the tags and puts them in a counter object with the objects as keys and numbers as values
var tagsCountObj =_.reduce(tagsArray, function(acc, curr){
    if(acc[curr]){
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    } return acc;
}, {});
//code that gets the counters with the max value
    var getMax = object => {
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object));
       });
    };
result = getMax(tagsCountObj);
return result;
};


// 10 // genderCount //
var genderCount = function(array){
    return _.reduce(array, function(resultObj, customerObj){
        if(resultObj[customerObj.gender]){
           resultObj[customerObj.gender] += 1 
        }
        else {
            resultObj[customerObj.gender] = 1;
        }
        return resultObj
    }, {})
};

/*
var nonBinaryCount = function(array) { 
  return array.filter(customers => { 
    return customers.gender === 'neutral' || customers.gender === 'non-binary';
  }).length;
};

genderCount = function(array) { 
  return array.filter(customers => { 
      return customers.gender === 'non-binary' || customers.gender === 'female' || customers.gender === 'male';
  }).length;
};
*/
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
