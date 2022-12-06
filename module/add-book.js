const addBookkkkk = () => {
  const addNewBook = document.querySelector('.new-book');
  if (addNewBook.classList.contains('vanish') === true) {
    addNewBook.classList.remove('vanish');
  }
  const contact = document.querySelector('.contact');
  if (contact.classList.contains('vanish') === false) {
    contact.classList.add('vanish');
  }
  const bookDisplay = document.querySelector('.awesome-books');
  if (bookDisplay.classList.contains('vanish') === false) {
    bookDisplay.classList.add('vanish');
  }
};
export { addBookkkkk as default };
