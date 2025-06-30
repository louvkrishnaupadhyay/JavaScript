


//  SCOPE {} KO JB HAM CODE ENVIRONMENT ME USE KRTE HAI TO VO ALG THR BEHAVE KRTA HAI OR JB HM CONSOLE ME BROWSER KE ANDR USE KRTE HAI TO ALG HOTA HAI


//var c = 30
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log('inner', a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "LOUV"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);                         //THIS WILL GENERATE ERROR

     two()

}

// one()

if (true) {
    const username = "LOUV"
    if (username === "LOUV") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);                        //THIS WILL GENERATE ERROR
}

// console.log(username);                       //THIS WILL GENERATE ERROR


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))                              //THIS WILL NOT GENERATE ERROR

function addone(num){
    return num + 1
}

// THERE ARE TWO WAY TO DEFINE FUNCTION

// addTwo(5)                                        //THIS WILL GENERATE ERROR
const addTwo = function(num){
    return num + 2
}