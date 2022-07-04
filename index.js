class Book {
    constructor(title, author, id) {
      this.title = title;
      this.author = author;
      this.id = id;
    }
  }


class UI {
    books = [];

    addBk();

    removeBtn();

    addBkToDisplay();
}

const addBtn = document.getElementById('add-btn');
const ui = new UI();

addButton();

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('books')) return;
    const books = JSON.parse(localStorage.getItem('books'));
    books.forEach((book) => ui.addBkToInterface(book));
});