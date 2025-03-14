const name = "RAHUL";
const repoCount = 50;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// when we declare string via this method then we able to use javascript objects
const gameName = new String("RahulDhanavansh");
// console.log(gameName);
// console.log(gameName[0]);//to print particular value
// console.log(gameName[6]);
// console.log(gameName.length); //to check the length of string
// console.log(gameName.toUpperCase());// convert all value in upperCase

// console.log(gameName.charAt(2));//to check character value
// console.log(gameName.indexOf('u'));//to check character index

// const newString = gameName.substring(0, 4);
// console.log(newString);

// const newStringOne = gameName.slice(-15, 1);
// console.log(newStringOne);

const url = "https://rahul.com/rahul%2097990";
console.log(url.replace('%20', '-'));
console.log(url.includes('rahul'));



