//const tinderUser = new Object()            //THIS IS SINGLETON OBJECT 

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "louv",
            lastname: "krishna"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'c', 4 : 'd'}
const obj4 = {5 : 'e', 6 : 'f'}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));         //THIS IS USED FOR FINDING THE TERM IN THE OBJECT


//************************************  DESTRUCTURING AND API's AND JSON***********************************


const course = {
    coursename: "java script",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor                           //YE METHOD BHI SHI HAI BUT AGR 3,4 VALUES PRINT KRNI HOGI TO FIR BAR BAR LIKHNA HOGA

const {courseInstructor: instructor} = course        //courseInstructor: instructor  esse hm courseInstructor ka name bdl skte hai so we can use instructor in place of course Inseructor

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]//THIS IS NOT SINGLETON OBJECT