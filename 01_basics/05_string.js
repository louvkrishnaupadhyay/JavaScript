const name = "louv"
const repoCount = 1

//console.log(`Hello my self ${name} and my repoCount is ${repoCount}`)

const gameName = new String('louv-com')

//console.log(gameName[3]);
//console.log(gameName.__proto__);


//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
//  console.log(gameName.charAt(2));
//  console.log(gameName.indexOf('l'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 3)
// console.log(anotherString);

// const newStringOne = "   louv    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://louv.com/louv%20krishna"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('c'));