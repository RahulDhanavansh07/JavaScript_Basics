// Primitives types

/* 
7 types
1. String
2. Number
3. Boolean
4. Symbol
5. Null
6. Undefined
7. BigInt
 */

// REference Type or Non-primitive

/*
Array
Objects
Functions
*/


// ARRAY
const heroes = ["shaktiman" , "naagraj", "doga"];
// console.log(heroes);
// console.log(typeof(heroes));
//why obj?


// OBJECT
let obj ={
    name : "rahul",
    age : 22
}

// console.log(obj);
// console.log(typeof(obj));

// FUNCTION
const myFunction = function(){
    console.log("Hello World");
}

// console.log(myFunction);
// console.log(typeof(myFunction));



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
There are two types of memory
1. Stack (Primitive)
2. Heap (NoN-Primitive)
*/

let myYotubeName = "Rahulswami07";

let anotherName = myYotubeName;
anotherName = "Dhanavansh07";

console.log(myYotubeName);
console.log(anotherName);
//in stack the copy of the value was stored

let userOne = {
    email : "rahul@google.com",
    upi : "rahul97990@upi"
}

let userTwo = userOne

userTwo.email = "Dhanavansh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//in Heap the  change was happened originally