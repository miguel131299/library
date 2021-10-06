let myLibrary = [];

//select elements
const table = document.getElementById("table");
const addButton = document.getElementById("new-book-button");

//add Event Listeners
addButton.addEventListener("click", addBookToLibrary);

function Book(title, author, pages, read, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = index;

  this.info = function () {
    let read_string;

    if (read) {
      read_string = "already read";
    } else {
      read_string = "not read yet";
    }

    return title + " by " + author + ", " + pages + " pages, " + read_string;
  };
}

function addBookToLibrary(params) {
  let title = window.prompt("Title: ");
  let author = window.prompt("Author: ");
  let pages = window.prompt("Number of Pages: ");
  let read_answer = window.prompt(
    "Have you read the book? Please answer yes or no: "
  );

  let read;
  if (read_answer === "yes") {
    read = true;
  } else {
    read = false;
  }

  const book = new Book(title, author, pages, read, myLibrary.length);

  myLibrary.push(book);

  printLibraryInfo();
}

function printLibraryInfo() {
  // delete previous table
  table.innerHTML = `<tr>
  <th>Title</th>
  <th>Author</th>
  <th>Pages</th>
  <th>Read</th>
  <th>ID</th>
</tr>`;

  let index = 0;

  for (const book of myLibrary) {
    const row = table.insertRow();

    for (const key in book) {
      if (Object.hasOwnProperty.call(book, key)) {
        if (!isFunction(book[key])) {
          const cell = row.insertCell();
          cell.innerHTML = book[key];
        }
      }
    }

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    row.appendChild(deleteButton);
    deleteButton.addEventListener("click", (book) => {
      deleteBook(book.index);
    });

    index++;
  }
}

function deleteBook(index) {
  console.log(index);
  myLibrary.splice(index, 1);
  printLibraryInfo();
}

function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}

const book1 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  295,
  false,
  myLibrary.length
);

myLibrary.push(book1);

const book2 = new Book(
  "Harry Potter",
  "J.K. Rowling",
  456,
  true,
  myLibrary.length
);

myLibrary.push(book2);

// addBookToLibrary();
printLibraryInfo();
