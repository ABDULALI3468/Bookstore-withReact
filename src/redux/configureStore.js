import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/books';
import categoryReducer from './categories/categories';

// const reducer = combineReducers({
//   books: booksReducer,
//   category: categoryReducer,
// });

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoryReducer,
  },
});
export default store;
