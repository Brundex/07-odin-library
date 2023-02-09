const books = [];

function renderBooks() {
  const booksList = document.querySelector("#book-list");
  booksList.innerHTML = "";

  books.forEach((book, index) => {
    const bookItem = document.createElement("li");
    bookItem.className = "new-book"
    bookItem.innerHTML = `
      ${book.title} by ${book.author}
      <button onclick="removeBook(${index})">Remove</button>
    `;
    booksList.appendChild(bookItem);
  });
}

function removeBook(index) {
  books.splice(index, 1);
  renderBooks();
}

const form = document.querySelector("#form");
form.addEventListener("submit", event => {
  event.preventDefault();
  const title = form.querySelector("#title").value;
  const author = form.querySelector("#author").value;
  const pages = form.querySelector("#pages").value;
  books.push({ title, author, pages });
  renderBooks();
});

renderBooks();





   

  
