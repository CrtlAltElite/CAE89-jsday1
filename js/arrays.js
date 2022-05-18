// Arrays

let grpONames=['Aydee', 'Ku', 'Ramika','Grady']

//index into
console.log(grpONames[2])


//Array destructuring
let aydee, ku, ramika, grady
[aydee, ku, ramika, grady] = grpONames
console.log(ku)


// Looping over an array inline forEach
console.log(
    grpONames.forEach((name_)=>console.log(name_))
)

console.log(grpONames.toString())

// ' ,'.join(grpONames) in python
console.log(grpONames.join(', '))

//.slice()
// my_list[2:4] in python
console.log(grpONames.slice(0,2))

//.splice() inserting... it can also remove
grpONames.splice(1,2,'Scarlett')
// console.log(new_grp)
console.log(grpONames)


// my_list.append(element) in python

console.log(grpONames)
console.log(grpONames.push('Jalen'))
console.log(grpONames)

console.log(grpONames.pop())
console.log(grpONames)


console.log(grpONames.indexOf("Grady"))

testString="testMe"
testString[2] = "G"
console.log(testString)


console.log(grpONames[-1]) // No No No  Not in JS house!

// .map()
let newGroup = grpONames.map((name)=>name[0])
console.log(newGroup)


let bigNameList=["Aydee","Shoaha", "Armani", "Gareth", "Andy", "Ku", "Jalen", "Anthony"]
let aNames=bigNameList.map(
    (na)=>{
        if (na[0].toLowerCase() == 'a'){
            return na;
        }else{
            return false;
        };
    }
);
console.log(aNames)
// goal:
// ["Aydee",false, "Armani", false, "Andy", false, false, "Anthony"]


//reduce
const nums = [2,4,6,8,10]
let numsSum=nums.reduce(
    (accumulator, currentNum)=> accumulator + currentNum
)

console.log(numsSum)

//filter
let aNames2=bigNameList.filter(
    name=>name[0].toLowerCase()=='a'
)

console.log(aNames2)

// .shift

shiftedNum = nums.shift()
console.log(shiftedNum)
console.log(nums)

//.unshift() add to the front of an array

nums.unshift(shiftedNum)
console.log(nums)


console.log('1' == 1) // true .. it is checking that the values are equal
console.log('1' === 1) //return false... this will check if the type and value are the same
