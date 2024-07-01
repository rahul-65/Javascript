//function
function sayMyName(){
console.log("R");
console.log("A");
console.log("H");
console.log("U");
console.log("L");
}

//sayMyName

function addTwoNumbers(number1 , number2){
    console.log(number1 + number2);
}
//addTwoNumbers( 4 , 4)

function loginUserMessage (username){
return `${username} just logged in`
}
//console.log(loginUserMessage("rahul"))

function calculateCartPrice(num1){
    return num1
}
//console.log(calculateCartPrice(2));

function calculateCartPrice(...num1){
    return num1
}

const user ={
    username:"rahul",
    price:199
}
function handleObject(anyobject){
   console.log(`username is ${anyobject.username}and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"sunny",
    price:299
})

const myNewArray = [200 , 300 , 400 , 500]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 500 , 400 , 507]));