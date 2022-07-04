class Book {
    constructor(title, author, id) {
      this.title = title;
      this.author = author;
      this.id = id;
    }
  }


class UI {
    books = [];

    addBk;

    removeBtn;

    
  
    
  const addBtn = document.getElementById('add-btn');
  const ui = new UI();