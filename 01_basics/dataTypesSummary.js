// DataTypes Summary for interview preparartion


// There are 2 dataTypes primitive and non-primitive


// Premitive dataTypes are 7 types :-

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefiend
// 6. Symbol
// 7. BigInt


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 868437975369027963n;


// Reference ( Non Primitive ) 

// 1. Array
// 2. Objects
// 3. Function

const heros = ["ironman", "superman", "batman"];

let myObj = {
    name: "jagdish",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myObj);


/********************* Memory *************** */

// Stack ( Primitive )
// Heap ( Non-Primitive)

let myYoutube = "jagdish"; 