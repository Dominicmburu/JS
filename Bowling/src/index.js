// VARIABLES
var sales = 12345689;
var course = 'Type';
var is_published = true;
var level;
// ARRAYS
var numbers = [1, 2, 3, 4, 5];
// TUPLES
var person = ['John Doe', 30];
// ENUMS
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var myColor = Color.Blue;
// FUNCTIONS
function calculateTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (taxYear < 50000)
        return income * 0.1;
    return income * 0.2;
}
calculateTax(30000);
// OBJECTS
var employee = {
    id: 1,
    name: 'John Doe',
};
employee.name = 'name';
