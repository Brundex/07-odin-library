document.getElementById("form").onsubmit = function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    console.table(myLibrary);
}

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// function createNewBook() {
//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const pages = document.getElementById("pages").value;
//     const newBook = new Book(title, author, pages);
//     myLibrary.push(newBook);
// }

console.log(myLibrary);


// function addBookToLibrary(_book) {

// }

   

  
