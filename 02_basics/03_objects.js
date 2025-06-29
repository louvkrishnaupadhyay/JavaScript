// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "louv",
    "full name": "louv krishna",
    [mySym]: "mykey1",             //VERY VERY IMPORTANT
    age: 18,
    location: "lucknow",
    email: "louv@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])       //WE CAN'T EXCESS THIS FULL NAME BY . WE USE []
// console.log(JsUser[mySym])               //SAME FOR THIS ALSO

JsUser.email = "louv@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "louv@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());