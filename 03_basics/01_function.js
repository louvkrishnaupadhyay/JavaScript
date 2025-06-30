/*
function addThreeNum(n1, n2, n3){
    console.log(n1 + n2 + n3)
}

addThreeNum('a', 4, 4) 
addThreeNum(4, 'a', 4) 
addThreeNum(4, 4,'a') 
*/


// function sayMyName(){
//     console.log('L')
//     console.log('o')
//     console.log('u')
//     console.log('v')
// }

// console.log(sayMyName())

function addTwoNum(n1, n2){
    // let result = n1 + n2
    // return result
    return n1 + n2
}

const result = addTwoNum(3,6)
// console.log('sum is:', result)

function logginUserMassage(username = 'louv'){
    if(!username){
        console.log('Please enter the username')
        return
    }
    return `${username} succesfully logged in`
}

// console.log(logginUserMassage('rishikesh'))
// console.log(logginUserMassage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(100, 200, 300 , 400, 500))

const user = {
    username : "louv",
    price : 899
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

// handleObject({
//     username : 'louv',
//     price : 899
// })

const newArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([100, 200, 300, 400, 500]))