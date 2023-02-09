const books = [];

function renderBooks() {
  const booksList = document.querySelector("#book-list");
  booksList.innerHTML = "";

  books.forEach((book, index) => {
    const bookItem = document.createElement("li");
    bookItem.className = "new-book";
    bookItem.innerHTML = `
    <h2>${book.title}</h2>
    <p style="font-size: 16px;">by ${book.author}</p>
    <p style="font-size: 16px;">${book.pages} pages</p>
    <div style="display: flex;">
      <button class="${book.read ? "read" : "not-read"}" onclick="toggleReadStatus(${index})">
        ${book.read ? "READ" : "NOT READ"}
      </button>
      <button class="remove" onclick="removeBook(${index})">Remove</button>
    </div>
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

function toggleReadStatus(index) {
    books[index].read = !books[index].read;
    renderBooks();
}

renderBooks();





   

  
