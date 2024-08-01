
function varExample() {
    var x = 10;
    if (true) {
        var x = 20; 
        console.log("Inside block: var x =", x); 
    }
    console.log("Outside block: var x =", x); 
}

function letExample() {
    let y = 10;
    if (true) {
        let y = 20; 
        console.log("Inside block: let y =", y); 
    }
    console.log("Outside block: let y =", y);
}


function constExample() {
    const z = 10;
    if (true) {
        const z = 20; 
        console.log("Inside block: const z =", z); 
    }
    console.log("Outside block: const z =", z); 

    
}

varExample();
letExample();
constExample();
let str = "Hello, World!";
let bool = true; 
let num = null; 
let u; 
let sym = Symbol("symbol"); 

console.log("str:", str, "Type:", typeof str);
console.log("num:", num, "Type:", typeof num);
console.log("bool:", bool, "Type:", typeof bool);

console.log("u:", u, "Type:", typeof u);
console.log("sym:", sym, "Type:", typeof sym);
let a = 10;
let b = 5;

console.log("Addition:", a + b); 
console.log("Subtraction:", a - b); 
console.log("Multiplication:", a * b); 
console.log("Division:", a / b); 
console.log("Modulus:", a % b); 
console.log("Exponentiation:", a ** b); 
let x = 10;
let y = 5;

console.log("x == y:", x == y); 
console.log("x != y:", x != y); 
console.log("x !== y:", x !== y); 
console.log("x > y:", x > y); 
console.log("x < y:", x < y); 
console.log("x >= y:", x >= y); 
console.log("x <= y:", x <= y); 
let p = true;
let q = false;
console.log("p && q:", p && q); 
console.log("p || q:", p || q); 
console.log("!p:", !p); 
console.log("!q:", !q); 
console.log("(p && q) || !q:", (p && q) || !q); 
