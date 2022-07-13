import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';

const Book = ({ book }) => (
  <>
    <div>
      {book.title}
    </div>
    <div>
      {book.author}
    </div>
    <button type="button" className="updateBtn">Remove</button>
  </>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
