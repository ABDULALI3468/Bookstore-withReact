import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const store = configureStore(
  {
    reducer: {
      books: booksReducer,
      category: categoriesReducer,
    },
  },
  applyMiddleware(thunk),
);
export default store;
