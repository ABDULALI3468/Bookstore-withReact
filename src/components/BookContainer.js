import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './Books';
import Category from './Category';
import NavBar from './NavBar';
import './Book.css';

const BookContainer = ({ books }) => (
  <Router>

    <div className="div">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Books books={books} />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  </Router>
);

BookContainer.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default BookContainer;
