// Lecture 1
/*

var a = 10

{
  let a = 100
  console.log(a)
}

console.log(a)
*/

/*
var a = 5 
a = 10
var a = 15
console.log(a)
*/

/*
let b = 20
b = 30 // in this way let can be updated but it cant be re declared
let b = 30 // error: let can not be re declared 
console.log(b)
*/

/*

const c = "Full Stack"

console.log(c)
*/

/* console.log("their are 7 basic non- primitive data type")
console.log()
 nn ss bb u
 n = number
 n = null
 s = string
 s = symbol
 b = boolean
 b = bigint  use to store big number which cant be stored in number datatype
 u = undefined
*/

/*
a = 4.56
b = null
c = "javascript"
d = Symbol("I am a symbol")// used to create unique identifier and it is immutable 
e = true // can also be false
f = BigInt(2456) // can not store float value 
g = undefined // if we dont write undefined then also it is undefined 
 

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)

console.log(typeof(a)) // use to chrck type of data 

*/

/*
const Marks = {
  "Ansh" : 70,
  "vansh": 45,
  "ram": 30
}

console.log(Marks["Ansh"])


Marks["vansh"] = 50 // marks are updated 

console.log(Marks["vansh"])


Marks["shyam"] = 60

console.log(Marks["shyam"]) // marks of 1 student is added 
*/

/*
var a = 1
{
let a = 100
  console.log(a)
}
  {
   var a = 10 
  console.log(a)
}
console.log(a)
*/

/*
let a = 6
let b = 2

console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a**b)
console.log(a%b)
console.log(a*b)

*/

// increment
/*
 let a = 10 
// console.log("a++ is ",a++) // value change hogi but it wont print 
 // console.log(a)

// case 2 
console.log("++a is ",++a) // phle value change hogi phir print 
*/

// Decrement

//let a = 10
// console.log("a-- is ",a--) // value change hogi but it wont print
// console.log(a)

// console.log("--a is ",--a) // phle value change hogi phir print

// task
let a = 10;
console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a   = ", a);
console.log("a-- = ", a--);
