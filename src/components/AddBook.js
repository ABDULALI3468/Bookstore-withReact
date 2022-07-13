import React from 'react';
import './AddBook.css';

const AddBook = () => (
  <div className="inputContainer">
    <h2 className="FormText">ADD NEW BOOK</h2>
    <form action="#">
      <input type="text" name="title" className="inputTitle" placeholder="Book Title" id="input0" />
      <input type="text" name="author" className="inputAuthor" placeholder="Book Author" id="input1" />
      <button type="submit" className="FormBtn">Add Book</button>
    </form>
  </div>
);

export default AddBook;
