// VARIABLES
let sales = 123_456_89;
let course = 'Type';
let is_published = true;
let level;

// ARRAYS
let numbers: number[] = [1, 2, 3, 4, 5];

// TUPLES
let person: [string, number] = ['John Doe', 30];

// ENUMS
enum Color { Red = 1, Green = 2, Blue = 3 };
let myColor: Color = Color.Blue;

// FUNCTIONS
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 50000)
        return income * 0.1;
    return income * 0.2;
}

calculateTax(30000)

// OBJECTS
let employee: {
    readonly id: number,
    name: string,
} = {
    id: 1,
    name: 'John Doe',
}

employee.name = 'name';
