const ADD_BOOK = 'bookstore_app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore_app/books/REMOVE_BOOK';

const books = [
  {
    id: '1',
    cat: 'Action',
    title: 'The Hunger Games',
    author: 'Suzzane Collins',
    comments: [],
    progress: 64,
    chapters: 20,
    currentChapter: { chapter: 17, chapterTitle: 'Hunger is no game' },
  },
  {
    id: '2',
    cat: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    comments: [],
    progress: 80,
    chapters: 20,
    currentChapter: { chapter: 3, chapterTitle: 'A lesson learned' },
  },
];

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
      return [...state, action.book];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.id);
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;
