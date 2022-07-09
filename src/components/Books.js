import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import AddBook from './AddBook';

const Books = ({ books }) => (
  <>
    <ul className="book-content">
      {books.map((book) => <Book key={book.id} book={book} />)}
    </ul>
    <AddBook />
  </>
);

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Books;
