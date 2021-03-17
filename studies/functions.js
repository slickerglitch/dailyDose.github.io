
/*

    Functions are fundamental to the functionality of our code!
    (haha)
    They allow us to perform actions and build increasingly complex processes.
    
    */
    
    // The Fxn Below is one I created for our homework assignment
    // I also diagrammed it and colorcoded it by hand,
        // in order to better understand the behavior of the function,
        // which is returning another function
        
function createGreaterThanFilter(base) {

  return function(number) {

    if(number > base) {
      return true;

    } else {
      return false;
    }

  }

}

var compare = createGreaterThanFilter(13); // input value is 13
compare('17'); // given value is 17

