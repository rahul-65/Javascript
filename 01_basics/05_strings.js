const name ="Rahul"
const repoCount = 50 

//console.log( name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rahullokhande')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

// console.log(gameName);

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-10,7)
console.log(anotherString);

const newStringOne = "    rahullll  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rahul.com/rahul%25lokhande"
console.log(url.replace('%25' , '-'))

console.log(url.includes('rahul'));

console.log(gameName.split('-'));



