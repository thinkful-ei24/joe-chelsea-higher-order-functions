// Functions as arguments 1
'use strict';

// repeat should say 'hello world' or 'goodbye world' 5 times.

let repeat = (fn, num) => { for (let i = 0; i < num; i++) fn(); }

let hello = () => console.log('Hello World');
let goodbye = () => console.log('Goodbye World');


repeat(hello, 5);
repeat(goodbye, 5);


//---------------------------------------------------------------------
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
// Functions as return values

let hazardWarningCreator = (typeOfWarning) => {
    let warningCounter = 0;

    return (location) => {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const stormWarning = hazardWarningCreator('Wet roads ahead');
const carCrashWarning = hazardWarningCreator('Crashed cars in left lane');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');

stormWarning('Centinela Ave and Olympic Blvd');
carCrashWarning('Centinela Ave and Olympic Blvd');


//---------------------------------------------------------------------
//Turtle Movements

let turtleMvmnts = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]

let newMoves = turtleMvmnts.filter(num => num[0] >= 0 && num[1] >= 0);

// return turtleMvmnts
//     .filter(num => num[0] >= 0 && num[1] >= 0)
//     .map(num => num[0] + num[1]
//     .forEach(num => console.log(num))

let noOfSteps = newMoves.map(num => num[0] + num[1]);


console.log(newMoves);
console.log(noOfSteps);
noOfSteps.forEach(num => console.log(num))

//-------------------------------------------------------------------