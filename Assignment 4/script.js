// 1. Write a JavaScript program to list the properties of a JavaScript object.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log(Object.keys(student).join(','))

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log("Before deleting rollno:", student);

delete student.rollno;

console.log("After deleting rollno:", student);


// 3. Write a JavaScript program to get the length of a JavaScript object.

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log("Length of object:", Object.keys(student).length);


// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books

var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

library.forEach(function (book) {
    console.log(`${book.title} by ${book.author}, Reading Status: ${book.readingStatus}`);
});


// 7. Write a JavaScript program that returns a subset of a string.

function subsetString(str) {
    let result = [];

    // Generate all subsets from start
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }

    return result;
}

console.log(subsetString("dog"));


// 10. Write a JavaScript program to sort an array of JavaScript objects.


var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];

library.sort((a, b) => b.libraryID - a.libraryID);

console.log(library);


// 11. Write a JavaScript function to print all the methods in a JavaScript object.
// Test Data :
// console.log(all_properties(Array));

function all_properties(obj) {
    return Object.getOwnPropertyNames(obj).filter(function (prop) {
        return typeof obj[prop] === 'function';
    });
}

console.log(all_properties(Array));


// 12. Write a JavaScript function to parse an URL.

function parseURL(url) {
    let parsedURL = new URL(url);

    return {
        href: parsedURL.href,
        protocol: parsedURL.protocol,
        host: parsedURL.host,
        hostname: parsedURL.hostname,
        port: parsedURL.port,
        pathname: parsedURL.pathname,
        search: parsedURL.search,
        hash: parsedURL.hash,
        origin: parsedURL.origin
    };
}

console.log(parseURL("https://www.example.com:8080/pathname/?search=test#hash"));



// 13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.

function allNames(obj) {
    let props = [];

    let currentObj = obj;

    do {
        props = props.concat(Object.getOwnPropertyNames(currentObj));
        currentObj = Object.getPrototypeOf(currentObj);
    } while (currentObj);

    return props;
}

console.log(allNames(Array));


// 14. Write a JavaScript function to retrieve all the values of an object's properties.

function getAllValues(obj) {
    return Object.values(obj);
}

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(getAllValues(student));

// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

function objectToPairs(obj) {
    return Object.entries(obj);
}

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(objectToPairs(student));


// 16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.

function invertObject(obj) {
    let inverted = {};

    Object.keys(obj).forEach(function (key) {
        inverted[obj[key]] = key;
    });

    return inverted;
}

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(invertObject(student));


// 17. Write a JavaScript function to check whether an object contains a given property.

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(hasProperty(student, 'name'));   // true
console.log(hasProperty(student, 'age'));    // false
