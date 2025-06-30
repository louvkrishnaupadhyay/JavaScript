

// THIS CURRENT CONTEST KO REFFER KRTA HAI

const user = {
    username: "LOUV",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//BROWSER ME JO CURRENT CONTEST HOTA HAI VO WINDOW HOTA HAI

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "louv"
    // console.log(this.username);         //FUNCTION ME THIS KA USE NAHI KR PATE
// }

// chai()

// const chai = function () {
//     let username = "louv"
//     console.log(this.username);       
// }

const chai =  () => {                       //YE ARROW FUNCTION HOTA HAI FUNCTION HTA KE () => LGA DETE HAI
    let username = "hitesh"
    // console.log(this);
}
                                        //ARROW FUNCION ME THIS EMPTY PERENTHESIS DETA HAI {}
                                        //OR NORMAL FUNCTION ME UNDEFINED

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 5))

//***************    METHOD 2 = IMPLISIT RETURN     ****************

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))

/*
ESKO BAD ME PDHENGE

const myArray = [2, 5, 3, 7, 8]

myArray.forEach()
*/