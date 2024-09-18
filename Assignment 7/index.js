// filterAndSort Function
function filterAndSort(filterFn, ...numbers) {
    var sortedNumbers = [];

    for (n in numbers) {
        if (filterFn(numbers[n]) === true) {
            sortedNumbers.push(numbers[n]);
        }
    }
    return sortedNumbers.sort()
}

const isEven = (num) => num % 2 === 0;
console.log(filterAndSort(isEven, 5, 3, 8, 6, 2));

// mergeObjects Function
function mergeObjects(...objs) {
    let mergedObjects = {};

    for (const obj of objs) {
        mergedObjects = { ...mergedObjects, ...obj };
    }

    return mergedObjects;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2));


// combineArrays Function
function combineArrays(...arrays) {
    let combinedArrays = []

    for (const array of arrays) {
        combinedArrays = [...combinedArrays, ...array]
    }

    return [...new Set(combinedArrays)]
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];
console.log(combineArrays(arr1, arr2, arr3));


// extractProperties Function
function extractProperties(objects, ...properties) {
    return objects.map(obj => {

        return properties.reduce((acc, prop) => {
            
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                acc[prop] = obj[prop];
            }

            return acc;
            
        }, {});
    });
}

const objects = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }];
console.log(extractProperties(objects, 'a', 'c'));






