// singleton 
//Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Rahul",
    "full name" : "Rahul Lokhande",
    [mySym]: "mykey1",
    age : 24,
    location  : "shirdi",
    email : "rahul@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday" , "Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "rahul@dot.com"
//Object.freeze(JsUser)
JsUser.email = "rahul@bot.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());