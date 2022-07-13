const ADD_BOOK = 'bookstore_app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore_app/books/REMOVE_BOOK';

const books = [];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...books, action.book];
    }
    case REMOVE_BOOK: {
      return books.filter((book) => book.id !== action.id);
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
