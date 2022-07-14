import './App.css';
import { useSelector } from 'react-redux/es/exports';
import BookContainer from './components/BookContainer';

// const books = [
//   {
//     id: 2,
//     title: 'The Hunger Games',
//     author: 'Suzanne Collins',
//     category: 'Action',

//   },
// ];

function App() {
  const books = useSelector((state) => state.books);
  return (
    <div className="App">
      <BookContainer books={books} />
    </div>
  );
}

export default App;
