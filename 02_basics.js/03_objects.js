//singleton


// object literals
const mySym = Symbol("key1");
const jsuser ={
    name:"shivani",
    [mySym]:"pooja",
    fullName:"shivani Chaurasia",
    age:18,
    location:"meerut",
    email:" ",
    isLogedIn:false,
 lastLogin:["monday","sunday"]
}

// console.log(jsuser.name);
// console.log(jsuser["email"])
// console.log(jsuser.fullName)
// console.log(jsuser[mySym]);

// jsuser.email="shivani@30.com"
// Object.freeze(jsuser)
// jsuser.email="shivani@80.com"
// console.log(jsuser)

jsuser.greeting=function(){
    console.log("heeloo js user")
}
jsuser.greeting2=function(){
    console.log(`hello js userr  ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greeting2())


