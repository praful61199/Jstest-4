// Theory test 
//  1 . what are the datatypes available in js ?
// answer > datatypes are of 2 types 
// primitive and non - primitive 

// primitive are of 7 types :
// 1)string 2)number 3) boolean 4) null 5) undefined 6) bigint 
// non primitive : 
// // arrays , functions , objects 



// 2 - Explain the difference between let , const ,var  ? 
// answer >  var , let , const are all keywords in javascript used to store values  
// >> var is a global scope variable , let and const are local 
// >> in var we can reassign and redeclare values 
// >> in let we can reasign but not redeclare values 
// >> in const we cannot redeclare and reassign values d



//  3 - what is the difference between == and === in js ?

// answer >> 
// both are comparsion operators 
// >> (==) is used to check values irrespective of their datatypes
// >> (===) is used to check values and their datatypes it strictly checks 


// 4 - explain prototypal inheritance works in js ?

// answer >> 
//  a mechanism in js where an object inherits properties and methods from another objects is called prototype inheritance
// let supercars = {name:"ferrari" , price : "456k"}
// let cars = object.create(supercars)

// 5 - what are closures in javascript ? 
// answer >> 
// a closure is a concept in js where a function is present inside a function

// function outer(){
//     var a = 10 ;
//     function inner(){
//         console.log(a)
//     }
// }

// 6 - what is the difference between null and undefined 
//   answer >> 
// undefined >> undefined is a datatype . it occurs when a variable is defined but value is not assigned 
// ex >> var a = ;

// null >> in null a variable is declared and assigned with null 

// ex >>
//  var  b = null

// 7) what is the purpose of this keyword in javascript ?
// answer >> this keyword refers to the object proitotype 


// 8 )how does event delegation work in js ?
// answer >> 


// 9) what are promises and how do they work ?

// answer >> promises and callback function work simultaneously . it is used to handle asynchronous functions 
//  in promises it is decided whether a code should be accepted or rejected 
//  it is in three steps  : pending , resolve , reject  

//  10 ) what is the difference between synchronous and asynchronous code ? 
// answer >> 
// synchronous code is the code which gets executed line by line without any stops 
// asynchronous code is the code which takes time in which async method like settimeout() is used to handle operations 

// 11 ) explain the concept of hoisting in javascript ?
// >>>  hoisting is concept in javascript where variable declaration and function declartion is moved on top while code execution
// ex >> console.log(a) // 
// var a = 20  

// 12 ) what are arrow functions and how are they different from regular functions ? 
// >>> 
// arrow functions is a short syntax for traditional functions , it is also used to declare a function

// syntax of arrow function :
// const add = () =>{

// }
// add()

// 13 ) what is the event loop in javascript and how does it work ? 

// >>> event loop is a process which executes code like event handling which handle asynchronous tasks . even though js is synchronous and single threated 
// event loop allows to perform asynchronous operations 
// >> call stack  - in call stack all the individual lines of  code is present 
// >> web api  -  here event loop stores asynchronous code from call stack and let it execute next line of code 
// >> task queue -  here after completion of asynchronous task like set timeout callback it is queued in task queue in order and 
//                 event loop redirect it again in call stack and iot gets executed 


// 14 ) how can youn handle errors in javascript using try - catch ?
// >> the try statement allows you to test a block of code 
// the catch statement lets you handle the errors if any are present 


// 15 ) what are javascript modules and how do they differ from traditional script tags ? 




// const products = [
//     { name : "laptop" , category : "Electronics " , price :  1000},
//     { name : "shirt" , category : "clothing" , price :  50 },
//     { name : "phone" , category : "Electronics " , price :  500},
//     { name : "shoes" , category : "clothing " , price :  80}

    
// ];

// function filterAndTransformProducts(products,category){

// const filteredproducts = products.filter(product  => product.category === category);

// const result = filteredproducts.map(product => product.name + '-$'+ product.price);
// return result;
// }
// console.log(filterAndTransformProducts(products,"clothing"));