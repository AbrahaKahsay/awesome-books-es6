import { addNewPage, listPage, contactPage } from './modules/navigation.js';
import Book from './modules/classes.js';
import { DateTime } from './modules_luxon/luxon.js';

/* eslint-disable max-classes-per-file */
const bookList = document.getElementById('booklist');
const dateDiv = document.getElementById('nav-date');

addNewPage();
listPage();
contactPage();

const date = DateTime.now();
const formattedDate = `${date.monthLong} ${date.day}th ${
  date.year
}, ${date.toLocaleString(DateTime.TIME_WITH_SECONDS)}`;
dateDiv.innerHTML = formattedDate;

class UI {
  books = [];

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    return book;
  }

  createRemoveBtn() {
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', (e) => {
      // remove element from interaface
      const id = +e.target.parentElement.id;
      e.target.parentElement.remove();
      // remove element from array
      const newBooks = this.books.filter((book) => book.id !== id);
      this.books = newBooks;
      localStorage.setItem('books', JSON.stringify(this.books));
      return this.books;
    });
    return removeBtn;
  }

  // Add a book to the application interface
  addBkToInterface(book) {
    // create div element to hold the title & author
    const newBook = document.createElement('div');
    newBook.setAttribute('id', book.id);
    // create title div
    const title = document.createElement('p');
    title.textContent = `"${book.title}"`;
    newBook.appendChild(title);

    const by = document.createElement('p');
    by.textContent = 'by';
    newBook.appendChild(by);

    //  create author div
    const author = document.createElement('p');
    author.textContent = book.author;
    newBook.appendChild(author);
    // Add a remove button to the book div
    newBook.appendChild(this.createRemoveBtn());
    //  create a horizontal rule & append to div
    bookList.append(newBook);
    return newBook;
  }
}

const addBtn = document.getElementById('add-btn');
const ui = new UI();

addBtn.addEventListener('click', () => {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;

  if (author && title) {
    // add book to array
    const book = new Book(title, author, ui.books.length + 1);
    ui.addBook(book);
    // add book to the interface
    ui.addBkToInterface(book);
    // clear the form fields
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
  }
  // if any field is empty, do nothing
});

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('books')) return;
  const books = JSON.parse(localStorage.getItem('books'));
  books.forEach((book) => ui.addBkToInterface(book));
});
