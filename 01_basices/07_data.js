// let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreat= new Date(2023,0,23);

// let myCreat = new Date(2023,0,23,5,44)
// console.log(myCreat.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreat.getTime());

let newDate= new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());


let val= newDate.toLocaleString('default',{
    weekday:"short"
})

console.log(val)