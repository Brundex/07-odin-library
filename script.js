const bookList = document.querySelector("#library")

let id = 0;
let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

document.getElementById("form").onsubmit = function(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    console.table(myLibrary)
    displayLibrary();
}

function displayLibrary() {
    const newBook = document.createElement("div");
    newBook.innerHTML = `${myLibrary[id].title} by ${myLibrary[id].author}`
    newBook.className = 'new-book';
    bookList.appendChild(newBook);
    id++;
}





   

  
