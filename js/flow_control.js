//Flow Control

function determineAge(age){
    if ( age < 7){
        return 'Your name must be Kyle!'
    }
    else if(age >= 7 && age <=65){
        return 'You are sadly middle aged'
    }else{
        return "You must be a childhood friend of Kevin's"
    }
}
// python and is &&
// python or is ||

console.log(determineAge(7))

// Ternary Operator
// if true stuff if boollean else false stuff -- in python

// condition ? expr is true : expr if false
function determineAge2(age){
    return age<18 ? 'Minor' : 'Adult';
};
console.log(determineAge2(16));

function determineAge3(age){
    return age<18 ? 'Minor' : age >=65 ? 'In the Grave' : 'Adult'
}
console.log(determineAge3(77))

// len(my_list) in python --> is JS myList.length
function listNums(){
    my_arr = [5,7,8,9,11]
    for(let i = 0; i<my_arr.length; i++){
        console.log('i is:', i)
        console.log(my_arr[i])
    }

}

console.log(listNums())

function myF(){x=1;};
console.log(myF());


function decrease(){
    for(let i = 20; i >= 0; i--){
        console.log(i);
    };
};
console.log(decrease());


// for name in names: .. in python

// for of loop in JS ... NOT A FOR IN for in in JS is something different!
let myArr=["a","b","c"];
for (const letter of myArr){
    console.log(letter);
};



// While
let whileArr = [5,7,8,9,10];
let cnt = 0;
while(cnt<whileArr.length){
    console.log(whileArr[cnt]);
    cnt++;
};

// Do While
let y=0;
let text='';
do{
    text += `I was here ${y} \n`
    y++;
}while(y<0)
console.log(text)


