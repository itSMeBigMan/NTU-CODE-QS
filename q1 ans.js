/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    var t = x;
    x = y;
    y = t;
    if (typeof swap !== 'number') return -1;
  
} 
    return [y, x];
}

 console.log(swap(x,y));

// Task 2: Add code here

window.swap(x,y)
module.exports = swap;


