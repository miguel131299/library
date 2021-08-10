let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        let read_string;

        if (read) {
            read_string = "already read";
        } else {
            read_string = "not read yet";
        }

        return title + " by " + author + ", " + pages + " pages, " + read_string;
    }
}

function addBookToLibrary(params) {
    let title = window.prompt("Title: ")
    let author = window.prompt("Author: ")
    let pages = window.prompt("Number of Pages: ")
    let read_answer = window.prompt("Have you read the book? Please answer yes or no: ")

    let read;
    if (read_answer === "yes") {
        read = true;
    }
    else {
        read = false;
    }

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

addBookToLibrary()