//array

const myArr = [ 0,1,2,3,4,5]
const myHeros = ["rahul","saurav", "sujit","saurabh"]

const myArr2 = new Array(1,2,3,4)

//console.log(myArr[5]);
//console.log(myHeros);

//Array methods

//myArr.push(6)  ++++++  to increament the value**
//myArr.pop()    ++++++  to minus the last value**

//myArr.unshift(5)
// myArr.shift()
// console.log(myArr);

//slice , splice

console.log("A",myArr);

const myn1 = myArr.slice(1 , 3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1 , 3)
console.log("C" , myArr);
console.log(myn2);