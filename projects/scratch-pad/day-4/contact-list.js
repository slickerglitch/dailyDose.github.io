// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

function makeContact(id, nameFirst, nameLast) {
    var contact = { "id": id, "nameFirst": nameFirst, "nameLast": nameLast};
    return contact;
} 


function makeContactList() {
/**
 * You need something here to hold contacts. See length api for a hint:
*/
    const contacts= [];
    // The contacts array is a collection device for our contact list 
    // MASSIVE return statement!
    return  {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        addContact: function(contact) {
            var newContact = contact;
            contacts.push(newContact);
        },
        
        removeContact: function(contact) {
            var index = contacts.indexOf(contact);
            contacts.splice(index,1);
        },
        
        printAllContactNames: function() {
          var contactNames = '';
          
          for (var i = 0; i <= contacts.length - 1; i++) {
         //Create a new line, except after the last contact in list
          contactNames += contacts[i].nameFirst + ' ' + contacts[i].nameLast;
          console.log(contactNames[i]);
          contactNames += '\n';
          }
            
        return contactNames.slice(0, contactNames.length - 1);
        
        },

        
        findContact: function(fullName) {
            var testName;
            
            for (var i =0; i < contacts.length; i++) {
                testName = contacts[i].nameFirst + " " + contacts[i].nameLast;
                if (fullName === testName) {
                    return contacts[i];
                }
            }
        }
    };
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
