import { configureStore, combineReducers } from '@reduxjs/toolkit';

import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoryReducer,
});
const store = configureStore(rootReducer);

export default store;
