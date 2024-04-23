//Stack Memory (Primitive) in this we using stack memory.

//Heap Memory (Non-Primitive) in this we using Heap memory for non-primitive datatypes

let myYoutubeName = "maharashtrachya baatmya"

let anotherName = "myYoutubeName"
anotherName = "learnwithRahul"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email : "user@google.com" ,
    upi : "user@ybl"

}

let userTwo = userOne 
userTwo.email = "rahul@google.com"

console.log(userOne.email);
console.log(userTwo.email);
