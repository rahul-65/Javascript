//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sunny"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser ={
    email:"regular@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rahul",
            lastname: "lokhande",

        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({} , obj1,obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);


const users = [
    {
        id : 1,
        email:"r@.com",

    },
    {
        id : 1,
        email:"r@.com",

    },
    {
        id : 1,
        email:"r@.com",

    },
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Destrucuring 

const course ={


coursename : "learn stock market",
price :"4999",
courseInstructor : "rahul"
}

// course.courseInstructor

const {courseInstructor : instructor} = 
console.log(courseInstructor);

{
    name : "rahulya",
    coursename :"js in hindi",
    
}