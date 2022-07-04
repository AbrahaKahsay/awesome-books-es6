const bookList = document.getElementById('booklist');

const bookContainer = document.getElementById('book-con');
const addBookContainer = document.getElementById('add-book');
const contactInformation = document.getElementById('cont-info');

const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contact = document.getElementById('contact');

const addNewPage = () => {
  addNew.addEventListener('click', (e) => {
    e.target.classList.add('active');
    addBookContainer.classList.remove('hide');
    list.classList.remove('active');
    bookContainer.classList.add('hide');
    contact.classList.remove('active');
    contactInformation.classList.add('hide');
  });
};
addNewPage();

const listPage = () => {
  list.addEventListener('click', (e) => {
    e.target.classList.add('active');
    bookContainer.classList.remove('hide');
    addNew.classList.remove('active');
    addBookContainer.classList.add('hide');
    contact.classList.remove('active');
    contactInformation.classList.add('hide');
  });
};
listPage();

const contactPage = () => {
  contact.addEventListener('click', (e) => {
    e.target.classList.add('active');
    contactInformation.classList.remove('hide');
    list.classList.remove('active');
    bookContainer.classList.add('hide');
    addNew.classList.remove('active');
    addBookContainer.classList.add('hide');
  });
};
contactPage();

export { addNewPage, listPage, contactPage };