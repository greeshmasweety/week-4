
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits:", fruits);


console.log("First fruit:", fruits[0]); 
console.log("Last fruit:", fruits[fruits.length - 1]);


fruits[1] = "Blueberry";
console.log("Modified fruits:", fruits); 

fruits.push("Dragonfruit");



let poppedFruit = fruits.pop();
console.log("After pop:", fruits); 
console.log("Popped fruit:", poppedFruit); 


let shiftedFruit = fruits.shift();
console.log("After shift:", fruits); 
console.log("Shifted fruit:", shiftedFruit); 

fruits.unshift("Avocado");
console.log("After unshift:", fruits); 

let numbers = [1, 2, 3, 4, 5];


let squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log("Squared numbers:", squaredNumbers); 


let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers); 

let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("Sum of numbers:", sum);
