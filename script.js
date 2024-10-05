
//Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

//empty array 
const myLibrary = []; 

//submit button in the form. Will initiate the whole process. 
const submitButton = document.getElementById('submitBtn'); 

function Book(title, author, pages, read) {
    this.title = title; 
    this.author = author;
    this.pages = pages; 
    this.read = read; 
}

submitButton.addEventListener('click', function(event){
    event.preventDefault(); 
    const form = document.getElementById('myForm');

    //Get values from the form fields
    const bookTitle = document.getElementById('bookName').value
    const author = document.getElementById('authorName').value 
    const pages = document.getElementById('pageNumbers').value
    const read = document.getElementById('options').value;

    const formDataObject = new Book(bookTitle, author, pages, read); 

    myLibrary.push(formDataObject); 

    console.log(myLibrary)

    form.reset() 

    form.style.display = 'none';
}); 


const button = document.getElementById('addBook'); 

function addBookToLibrary() {
    const formVisibility = document.querySelector('form'); 
    formVisibility.style.display = 'flex'; 
}

button.addEventListener('click', addBookToLibrary)

