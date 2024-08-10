// question 1 

// const products = [
//     { name : "laptop" , category : "Electronics " , price :  1000},
//     { name : "shirt" , category : "clothing" , price :  50 },
//     { name : "phone" , category : "Electronics " , price :  500},
//     { name : "shoes" , category : "clothing " , price :  80},

    
// ];

// function filterAndTransformProducts(products,category){

// const filteredproducts = products.filter(product  => product.category === category);

// const result = filteredproducts.map(product => product.name + '-$'+ product.price);
// return result;
// }
// console.log(filterAndTransformProducts(products,"clothing"));


// question 2 


const orders = [
    {orderid: 1 , tableNumber : 2 , amount : 30},
    {orderid: 2 , tableNumber : 1 , amount : 20},
    {orderid: 3 , tableNumber : 2 , amount : 50},
    {orderid: 4 , tableNumber : 3 , amount : 40},
    {orderid: 5 , tableNumber : 1 , amount : 10},
];


function sumByTable(orders){
    const result = {};
    orders.forEach(order => {
        const tableNumber = order.tableNumber;
        const amount = order.amount;

        if (result[tableNumber]) {
            result[tableNumber] += amount;
        }else{
            result[tableNumber] = amount;
        }
    });
    return result

}
console.log(sumByTable(orders))

//Nested Objects and Property Counting. you are given an array of
//  objects representing students. Each object has a name property and a subjects property which is an array of strings representing the subjects
//the student is enrolled in. Write a function called countSubjects that returns an object where each key is a subject and the value is the number of 
//students enrolled in that subject

//Nested Objects and Property Counting. you are given an array of
//  objects representing students. Each object has a name property and a subjects property which is an array of strings representing the subjects
//the student is enrolled in. Write a function called countSubjects that returns an object where each key is a subject and the value is the number of 
//students enrolled in that subject

const students = [
    { name: "Alice", subjects: ["Math", "Science"] },
    { name: "Bob", subjects: ["English", "Math"] },
    { name: "Charlie", subjects: ["Math", "History"] },
    { name: "David", subjects: ["Science", "History"] },
];

function countSubjects(students) {
    const subjectCount = {};

    students.forEach(student => {
        student.subjects.forEach(subject => {
            if (subjectCount[subject]) {
                subjectCount[subject]++;
            } else {
                subjectCount[subject] = 1;
            }
        });
    });

    return subjectCount;
}


console.log(countSubjects(students));

// Object Transformation and filtering. You are given an array of objects representing inventory items. Each object has a name, quantity,
// and PromiseRejectionEvent. Write a function called inventoryValue that returns the total value of the inventory, but only includes items where
// the quantity is greater than zero
const inventory = [
    { name: "Laptop", quantity: 5, price: 1000 },
    { name: "Shirt", quantity: 0, price: 50 },
    { name: "Phone", quantity: 10, price: 500 },  // Fixed typo "prie" to "price"
    { name: "Shoes", quantity: 3, price: 80 },
];

function inventoryValue(inventory) {
    return inventory
        .filter(item => item.quantity > 0) // Filter out items with quantity 0
        .reduce((total, item) => total + (item.quantity * item.price), 100); // Sum up the total value
}

console.log(inventoryValue(inventory)); // Output: 15800

//Aggregating and Sorting data. you are given an array of objects representing trasactions. each object has a userId, amount, and data. Write a function
// called topSpenders that returns an array of userIds sorted by their total transaction amount in descending order. Only include users who have
// made more than one transaction

const transactions = [
    { userId: 1, amount: 50, date: "2023-01-01" },
    { userId: 2, amount: 20, date: "2023-01-02" },
    { userId: 1, amount: 100, date: "2023-01-03" },
    { userId: 3, amount: 150, date: "2023-01-04" },
    { userId: 2, amount: 30, date: "2023-01-05" },
];

function topSpenders(transactions) {
    const userTotals = {};

    // Step 1: Aggregate the transactions by userId
    transactions.forEach(transaction => {
        const userId = transaction.userId;
        const amount = transaction.amount;


        if (userTotals[userId]) {
            userTotals[userId].totalAmount += amount;
            userTotals[userId].transactionCount++;
        } else {
            userTotals[userId] = { totalAmount: amount, transactionCount: 1 };
        }
    });

    // Step 2: Filter out users who have only made one transaction
    const filteredUsers = Object.entries(userTotals)
        .filter(([userId, data]) => data.transactionCount > 1)
        .map(([userId, data]) => ({ userId: parseInt(userId), totalAmount: data.totalAmount }));

    // Step 3: Sort the filtered users by totalAmount in descending order
    filteredUsers.sort((a, b) => b.totalAmount - a.totalAmount);

    // Step 4: Return the sorted userIds
    return filteredUsers.map(user => user.userId);
}

console.log(topSpenders(transactions)); // Output: [1, 2]




