const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
];

// Filter items where price is greater than 450
const expensiveItems = availableFoods.filter(item => item.price > 450);

// Calculate the total bill
const totalBill = expensiveItems.reduce((sum, item) => sum + item.price, 0);

// Print the message
console.log(`My total bill for items above 450 is ${totalBill}`);