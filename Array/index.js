// new array
let joy = [21, 22, 23, 24, 25];
let joy1 = [101, 102, 103, 104, 105];

// access first and last element
// first 
console.log(joy[0])
// last 
console.log(joy[4])

// add an element
joy.push(26)
console.log(joy)

// remove the last element in the array
joy.pop()
console.log(joy)

// loop through an array
for (let i = 0; i < joy.length; i++) {
    console.log("just for " + joy[i])
}

joy.forEach((element) => {
    console.log("for each " + element)
})

for (j in joy) {
    console.log("for in " + joy[j])
}

// check if element exists in an array
console.log(joy.includes(23))

console.log(joy.indexOf(25))

// remove element from an array at a specific index
console.log(joy.splice(0))

// concate to a js
console.log("########## #########")

let newJoy = [21, 22, 23, 24, 25];
let newJoy1 = [101, 102, 103, 104, 105];

let newArray = newJoy.concat(newJoy1)

console.log(newArray)

// flatten
console.log("###################")
const numbers = [1, 2, [3, 4], [5, [8], [6, 7]], [12, [22, 23, [24, 25]]]];
const flattenNumbers = numbers.flat(2);
console.log(flattenNumbers)

// first 3 elements
console.log('original ' + newJoy)
console.log(newJoy.slice(1, 3))
console.log(newJoy.slice(3))
console.log(newJoy.slice(-3))

// map and forEach
console.log("map and forEach")
newJoy.map((e) => {
    console.log(e);
});



