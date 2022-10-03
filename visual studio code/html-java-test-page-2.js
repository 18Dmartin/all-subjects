
console.log("hello everyone whats occuring")
// single line comment

/*
multi-line comment
this comment will cover 
several lines
*/

//variables

/* 
there are 2 ways of declaring variables in javascript

var a = 10;

let a = 10;

const x = 20;
*/
let a = 10;

console.log(a)

const x =20;

console.log(x)

let BoB =50;

let Bob =40;

//Datatype
/*
numbers
string
booleans
*/

let temp =10 //Datatype numbers
let temp1 ="10" //Datatype string

//all numbers in javascript are floating point numbers
/*all variables names in javascript must begin with a letter
or an underscore_. you can not use a reserved word as a variable
*/

//arithmatic operations

//adition
console.log(5+2)

//subtraction
console.log(5-2)

//multiplication
console.log(5*2)

//division 
console.log(6/2)

//exponent
console.log(3**4)

//increment
let h = 11;

console.log(h++);

console.log(h);


//decrement 
let k = 5;

console.log(k--)

console.log(k)

console.log (--k)

//comparison operators

//equals ==

console.log(3 == 5)

console.log(4 == 4)

//not equals !=

console.log(3 != 5)

console.log(9 != 9)

//greater than >

console.log(3 > 5)

console.log(10 > 1)

//less than <

console.log(3 < 5)

console.log(11 < 10)

//greater than or equal to >=

console.log(3 >= 5)

console.log(11 >= 10)

console.log(5 >= 5)

//less than or equal to <=

console.log(3 <= 5)

console.log(11 >= 10)

console.log(5 <= 5)

//assignment operators

//equals = 
//this is the sumple assignment

let n = 12;

//add and assignment
n +=12; //this in writing is n = n + 12
console.log(n);

//subract and assignmet 

n -= 4; // this in writting is n = n - 4
console.log(n);

//multiply and assignment 
n *= 5; // in writting this means n = n *5
console.log(n);

//divide and assignment 
let y = 4;

console.log(y)

//module and assignment 
y %= 2; // this in writting means y = y%2

console.log(y);

                 //conditional opperator
/* the conditional opperator values an expression 
for true or false. if true, it executes the first statement
otherwise it executes the second statmement*/
 
let first = 10;
let second = 12;

console.log(first>second?"true":"false")


            // typeof operator

let mystring = "hello";
console.log(typeof(mystring));

let mynumber = 12;
console.log(typeof(mynumber));

            // user input
/*
the prompt()function is used to take input
from the user.
the default datatype for input is a string
to convert input to an number, wrap the 
prompt in a NUMBER() function call
*/
let mysecondstring = prompt("enter something");

console.log(mysecondstring);

let mysecondnumber = Number(prompt("enter something"));
console.log(mysecondnumber);

            // if statements
/* the if statement is a control statement
which executes if a test condition 
evalutates to be true
*/

let myage = 400;

if(myage > 500){
    console.log("you are over 500 years old")
}

            // if else statements
/* if else is also a control statement
if the test conditiion is true it executes
the code in the if block, otherwise
it executee=s the code in the if else block
*/


if (myage> 500){
    console.log("you are over 500 years old");
}else{
    console.log("you are not over 500 years old");
}

            //else if statements
/* similar to the two control statements above, 
this can test mulyiple different conditions.
if they all fail it will run the else conditions*/

if (myage> 500){
    console.log("you are over 500 years old");
}else if(myage< 500){
    console.log("you are under 500 years old");
}else{
    console.log("you must be 500 years old");
}


