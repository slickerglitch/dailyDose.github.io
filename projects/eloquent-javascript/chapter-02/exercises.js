
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(n) {
  let tri = '';
  if (tri.length <= n) { 
    for (let i = 0; i < n; i++) { 
      console.log(tri += '#');
    }
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let i = 1; i <= 15; i++) { 
    if (i % 15 === 0) { 
      console.log('fizzbuzz');
    }
    else if (i % 5 === 0) {
      console.log('buzz');
    }
    else if (i % 3 === 0) { 
      console.log('fizz');
    } else { 
      console.log(i);
      
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
// The fxn's one @param {Number} (size) can accept any number value.
  var board = '';
  for (var y = 0; y < size; y++) { // 1st For Loop
  for (var x = 0; x < size; x++) { // 2nd For Loop
  if ((x + y) % 2 == 0) 
    board += " ";
    else
      board += "#";
    }
      board += "\n";
  }
  console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
