const homePage = () => {
  const addNewBook = document.querySelector('.new-book');
  if (addNewBook.classList.contains('vanish') === false) {
    addNewBook.classList.add('vanish');
  }
  const contact = document.querySelector('.contact');
  if (contact.classList.contains('vanish') === false) {
    contact.classList.add('vanish');
  }
  const bookDisplay = document.querySelector('.awesome-books');
  if (bookDisplay.classList.contains('vanish') === true) {
    bookDisplay.classList.remove('vanish');
  }
};

export { homePage as default };
