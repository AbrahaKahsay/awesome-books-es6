const addBk= () => {
    addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    return book;
  }
}

const removeBtn = ()=> {
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
}

    