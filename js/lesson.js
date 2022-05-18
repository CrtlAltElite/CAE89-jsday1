// Comments
/*
    Multiline
    comments
    look like 
    this
*/

var firstName;
console.log(firstName);

var lastName="Bush";
console.log(lastName);
lastName ="Clinton"
console.log(lastName);

var someNumber = 41;
console.log(someNumber);

//float
var someFloat = 3.14;
console.log(someFloat);

//boolean
var someBool = false;
console.log(someBool)

// Array
var someArray = [1,2,3]
console.log(someArray)

// Object Varible
var someObject = {'test':'Please Test Me!'};
console.log(someObject);

var someObject2 = {test:'Please Test Me!'};
console.log(someObject2);

console.log(notHere);
var notHere = "Steve"
console.log(notHere);

testHoist();
function testHoist(){
    let blah = "blah";
    console.log(blah)
};
testHoist();

//math

// add
let sum = 5 + 5 ;
console.log(sum);
sum +=5;
console.log(sum);
sum++;
console.log(sum);

// substract
let diff = 5 - 5
console.log(diff)
diff -= 5
console.log(diff)


// multiply
let prod = 5*5;
console.log(prod);
prod *= 5;
console.log(prod);

// Divide
let divide = 5/5 //1
console.log(divide)
console.log(typeof divide)
divide /= 5 // .2
console.log(divide)
console.log(typeof divide)

//exp
let square = 5**2;
console.log(square); //25
square **= 2;
console.log(square); // 625

//  Floor Division 
// In python we did 5//2 = 2
let floor = Math.floor(2.5)
console.log(floor) //2

// ceiling 
let ceil = Math.ceil(5/2)
console.log(ceil) //3

// check this out
let stuff = 3.14 + '4'
console.log(stuff)

// int() float() str() in python
let stuff2 = 3.14 + parseInt('4')
console.log(stuff2)

let stuff3 = 3.14.toString() + "4"
console.log(stuff3)

console.log(parseFloat('3.14')+2)

