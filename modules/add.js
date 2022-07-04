
const addButton = ()=>{
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
}; 