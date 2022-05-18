// def name():
//     body
//     return something

function addNums(){
    let num = 4;
    let num2 = 5;
    return num + num2;
};
console.log(addNums());

function addNums2(num, num2){
    return num + num2;
}
console.log(addNums2(4,5))

// ES6+ Arrow Functions

// if your arrow function body is only 1 line it is automatically returned
const cubed = () => 3**3;
console.log(cubed())

const cubed1 = () => {
    let x = 3;
    return x**3;
};
console.log(cubed1());

const cubed2 = num => num**3;

console.log(cubed2(3))

const cubed3 = (num1, num2) => (num1+num2)**3;
console.log(cubed3(1,2))

// Closure
function my_clousure(){
    let counter = 0; // This is a private Variable
    function add_to_count(){
        counter++;
        return counter;
    }
    return add_to_count
}

let add = my_clousure();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

console.log(
    (
        function(nam){
            let hello = 'Hello World ' + nam;
            return hello
        }
    )('Gareth')
)

let number = 666
let my_string = `your number is ${number}`
console.log(my_string)

