
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281
};


function printBookDetails(book) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`);
}


printBookDetails(book);

book.summary = function() {
    console.log(`${this.title} by ${this.author} is ${this.pages} pages long.`);
};


book.summary();

let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        console.log(`Full Name: ${this.firstName} ${this.lastName}`);
    }
};


person.fullName();

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}


Car.prototype.details = function() {
    console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
};


let car1 = new Car("Toyota", "Camry", 2020);
let car2 = new Car("Honda", "Civic", 2018);


car1.details();
car2.details();

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

   
    printDetails() {
        console.log(`Animal: ${this.name}, Species: ${this.species}`);
    }
}


let animal = new Animal("Leo", "Lion");


animal.printDetails();
