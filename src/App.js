import './App.css';
import BookContainer from './components/BookContainer';

const books = [
  {
    id: 2,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',

  },
];

function App() {
  return (
    <div className="App">
      <BookContainer books={books} />
    </div>
  );
}

export default App;
