"use strict";
let sales = 12345689;
let course = 'Type';
let is_published = true;
let level;
let numbers = [1, 2, 3, 4, 5];
let person = ['John Doe', 30];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
let myColor = Color.Blue;
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 50000)
        return income * 0.1;
    return income * 0.2;
}
calculateTax(30000);
let employee = {
    id: 1,
    name: 'John Doe',
};
employee.name = 'name';
//# sourceMappingURL=index.js.map