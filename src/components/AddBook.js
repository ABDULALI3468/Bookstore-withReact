import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(
        addBook({
          id: uuidv4(),
          cat: 'Action',
          title,
          author,
          comments: [],
          progress: 64,
          chapters: 20,
          currentChapter: { chapter: 17, chapterTitle: 'Hunger is no game' },
          category: 'Add_book',
        }),
      );
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="inputContainer">
      <h2 className="FormText">ADD NEW BOOK</h2>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} className="inputTitle" placeholder="Book Title" id="input0" />
        <input type="text" name="author" value={author} className="inputAuthor" onChange={(e) => setAuthor(e.target.value)} placeholder="Book Author" id="input1" />
        <button onClick={handleSubmit} type="submit" className="FormBtn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
