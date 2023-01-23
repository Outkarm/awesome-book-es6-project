const contactArea = () => {
  const addNewBook = document.querySelector('.new-book');
  if (addNewBook.classList.contains('vanish') === false) {
    addNewBook.classList.add('vanish');
  }
  const contact = document.querySelector('.contact');
  if (contact.classList.contains('vanish') === true) {
    contact.classList.remove('vanish');
  }
  const bookDisplay = document.querySelector('.awesome-books');
  if (bookDisplay.classList.contains('vanish') === false) {
    bookDisplay.classList.add('vanish');
  }
};
export { contactArea as default };
