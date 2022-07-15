import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './Book.css';

const Category = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <div>
      <>
        <h1>checking...</h1>
        <button onClick={() => { dispatch(checkStatus()); }} type="button" className="updateBtn">
          Check status
        </button>
        <p>{category}</p>
      </>
    </div>
  );
};

export default Category;
