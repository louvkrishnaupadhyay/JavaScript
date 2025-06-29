const score = 400
// console.log(score)

const balance = new Number(100)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))

const otherNumber = 123.970
// console.log(otherNumber.toPrecision(4))

const num = 100000000
// console.log(num.toLocaleString('en-In'))


//+++++++++++++++++++++++++++++++++  maths  +++++++++++++++++++++++++++++++++

// console.log(Math.ceil(-4.2))             //this will give top value
// console.log(Math.floor(-4.2))            //this will give bottom value
// console.log(Math.abs(-4.2))              //this convert -ve to +ve only
// console.log(Math.round(-4.2))           //this will give round off value
// console.log(Math.min(6,9,3,-1))
// console.log(Math.max(6,9,3,1))

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor((Math.random() * 10) + 1))

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)