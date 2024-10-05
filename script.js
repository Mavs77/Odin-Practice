
function Car(make, year) {
    this.make = make; 
    this.year = year; 
    this.description = function() {
        console.log(`This is my ${this.year} ${this.make}`)
    }
}

const secondCar = new Car('Honda', 2021); 
const firstCar = new Car('Hyundai', 2016); 

firstCar.description(); 
secondCar.description(); 

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.read = read; 
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`; 
    }
}




const myLibrary = []; 

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here 
}

//Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.


//Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want. How you decide to display this form is up to you.

//Add a button on each book’s display to remove the book from the library.You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.


//Add a button on each book’s display to change its read status.To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.