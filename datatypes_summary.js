// primitive type 

//7 types : String ,  Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol("1230")
const anotherId = Symbol("1230")

console.log(id === anotherId);

const bigNumber = 123654796n



//Reference type (Non Primitive)

// Object , Array, Functions

const heros = ["shaktiman","rahul", "lokhande"] //  < array datatypes 
 
let myObj = {
    name : "rahul",
    age :23,
    mobile : 9345654565
}    
// ^ objects datatypes in non primitive

console.log(heros);
console.table(myObj);

// **********************

//functions in non primitve datatypes

const myFunction = function() {
console.log("Hello world");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof bigNumber);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);
console.log(typeof id);


// array datatype object 
//function datatype function
//bigint datatype bigint 
//if unddeclared datatype value then datatype will be undefined
// symbol datatype is symbol 
// object datatype also object
// boolean datatype also pringt as boolean
// string datatype also string 
// null datatype also null