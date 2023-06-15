// Assignment Value 


/*
let x = 5
let y = 10

// Assign the value of x + y to z 
let z = x+y

console.log(z) // output is 15 
*/




// And operator

/*
let x = 5
let y = 6 
console.log(x<y && x == 5)
*/






//Or operator
/*
let x = 5
let y = 6 
console.log(x>y || x==4)
*/





// Prompt 
/*
let a = prompt("What is your age ")
console.log(a)
console.log(typeof(a))

a = Number.parseInt(a)
console.log(typeof(a))
*/





// Alert 
 // let a = alert("this is correct number ")




// If Statement
/*
if(condition){
  body of code 
}
*/


// If Statement


/*
let age = prompt("Enter Your Age")
// age = Number.parseInt(age)

if (age>=18) {
console.log("you are eligible for driving a car ")  
}
*/


// If - Else 

/*

let age = prompt("Enter Your Age")
age = Number.parseInt(age)

if (age>=18) {
console.log("you are eligible for driving a car ")  
}
else{
  console.log("You are not eligible for driving a car ")
}

*/

// If Else-if 
/*
let num = 3;

if (num > 6) {
  console.log("Number is greater then 6 ");
} 
 else if (num < 5) {
  console.log("Number is lesser then 5 ");
} 
else {
  console.log("Number is five");
}
*/

// Ternary Operator 

 // (condition) ?  true : false

/*
let age = 25;
let message = (age >= 18) ? "You can vote" : "You can't vote";

console.log(message);
*/




// switch case 

/*
switch(x){
    case value1:
        // Code to be executed if x === value1
        break;
    case value2:
        // Code to be executed if x === value2
        break;
  
    default:
        // Code to be executed if x is different from all values
}




let day = prompt("What day is today")

switch(day){
  case "Monday":
    console.log("Today is Monday ")
    

      case "Tuesday":
    console.log("Today is Tuesday ")
    break;

      case "Wednesday":
    console.log("Today is Wednesday ")
    break;

      case "Thursday":
    console.log("Today is Thursday ")
    break;

      case "friday":
    console.log("Today is friday")
    break;

  default:
    console.log("Enter the Valid day")
}





// for loop 
/*
for (initialization; condition; increment/decrement) {
    // code to be executed in each iteration
}

// for loop example

for(let i = 0;i<=100;i++){
console.log(i)
}
*/


/*

let obj = {
  vansh: 80,
  ansh: 90,
  kapil: 91,
  aryan: 25,
  rohan: 50,
  
  
}


/*
for(let a in obj){
  console.log(a)
}
*/






/*
// for in-loop 
for(let a in obj){
  console.log("marks of " + a + " are " + obj[a])
}

*/



/*
// for of loop
for(let b of "60"){
  console.log(b)
}
*/

// write a program for a calculator using switch case 