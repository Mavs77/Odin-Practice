
//Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

const button = document.getElementById('addBook'); 

//makes the form visible when 'addBook' button is clicked so that the user can add their desired book. Also hides the shelf so they both don't take up too much space. 
function addBookToLibrary() {
    const formVisibility = document.querySelector('form'); 
    formVisibility.style.display = 'flex'; 
    const shelfVisibility = document.getElementById('bookShelf'); 
    shelfVisibility.style.display = 'none'; 
}

button.addEventListener('click', addBookToLibrary)

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

submitButton.addEventListener('click', function addBook (event){
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


//makes the library visible when 'show library' button is clicked so that the user can view their current collection of books. Also hides the form submission to make sure both the form and shelf are not visible at the same time. 


// function showShelf() {
//     const shelfVisibility = document.getElementById('bookShelf'); 
//     shelfVisibility.style.display = 'grid'; 
//     const form = document.getElementById('myForm');
//     form.style.display = 'none';
// }



function renderLibrary() {
    
    const container = document.getElementById("bookShelf");

    //change container's display to grid 
    container.style.display = 'grid'; 

    //hiding form if visible
    const form = document.getElementById('myForm');
    form.style.display = 'none';

    //clear the container before re-rendering
    container.innerHTML = ''; 

    myLibrary.forEach(item => {
        //create a new div for the card
        const card = document.createElement('div'); 
        card.classList.add('card'); //add a class for styling purposes

        //add content to the card
        const title = document.createElement('h2'); 
        const author = document.createElement('h2'); 
        const pages = document.createElement('h2'); 
        const read = document.createElement('h2'); 
        title.textContent = `Book Title: ${item.title}`; 
        author.textContent = `Author: ${item.author}`; 
        pages.textContent = `Number of pages: ${item.pages}`
        read.textContent = `Have you already read this book? ${item.read}`

        //append content to the card
        card.appendChild(title); 
        card.appendChild(author); 
        card.appendChild(pages); 
        card.appendChild(read); 

        //append the card to the container
        container.appendChild(card); 
    }); 
}

const showLibrary = document.getElementById('showLibrary'); 

showLibrary.addEventListener('click', renderLibrary)
