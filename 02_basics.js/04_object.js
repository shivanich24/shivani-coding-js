// const tinder = new Object()

const tinder={}

tinder.id="123"
tinder.name="shivani"
// console.log(tinder)

const regularuser={
    email: "shivi@3211",
    fullname:{
            userfullname:{
                firstname:"shivani",
                lastname:"chaurasia"
            }
    }
}

// console.log(regularuser.fullname.userfullname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3= {...obj1, ...obj2}   //spread oprator
// console.log(obj3)

const user =[
    {
        id:1,
        email:"ghkkj@gmail.com"
    },
    {
        id:1,
        email:"ghkkj@gmail.com"
    },
    {
        id:1,
        email:"ghkkj@gmail.com"
    },
]


// for(let i=0; i<=user.length; i++){
//     console.log(user)
// }

// console.log(Object.keys(tinder));  //genrate code take value
// console.log(Object.values(tinder));

// console.log(tinder.hasOwnProperty('kk'));


const course= {
    coursename:"js in Hindi",
    Price:"999",
    courseInsurance:"hitesh"
}

const {courseInsurance,Price,coursename}=course
console.log(courseInsurance,Price,coursename);


