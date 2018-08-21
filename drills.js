// Functions as arguments 1
'use strict';

// repeat should say 'hello world' or 'goodbye world' 5 times.

let repeat = (fn, num) => { for (let i = 0; i < num; i++) fn(); }

let hello = () => console.log('Hello World');
let goodbye = () => console.log('Goodbye World');


repeat(hello, 5);
repeat(goodbye, 5);


/////////////////////////////////////////////////////////////////////