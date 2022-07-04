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
const addBkToDisplay= ()=>{
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
    