
import {addBk, removeBtn, addBkToDisplay} from "./modules/methods.js"
import {addButton} from "./modules/add.js"
import {addNewPage, listPage, contactPage} from "./modules/navigation.js"

class Book {
    constructor(title, author, id) {
      this.title = title;
      this.author = author;
      this.id = id;
    }
  }


class UI {
    books = [];
    addBk()
    removeBtn()
    addBkToDisplay()
}

addButton();

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('books')) return;
    const books = JSON.parse(localStorage.getItem('books'));
    books.forEach((book) => ui.addBkToInterface(book));
});