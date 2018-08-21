// Functions as arguments 1
'use strict';

// repeat should say 'hello world' or 'goodbye world' 5 times.

let repeat = (fn, num) => { for (let i = 0; i < num; i++) fn(); }

let hello = () => console.log('Hello World');
let goodbye = () => console.log('Goodbye World');


repeat(hello, 5);
repeat(goodbye, 5);


/////////////////////////////////////////////////////////////////////
//---- Number 2

function filter(array, fn) {   
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
        if (fn(array[i]) === true) arr.push(array[i]);
    }
    return arr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

//---------------------------------------------------------------------