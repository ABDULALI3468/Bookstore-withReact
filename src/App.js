import './App.css';
import { useSelector } from 'react-redux/es/exports';
import BookContainer from './components/BookContainer';


function App() {
  const books = useSelector((state) => state.books);
  return (
    <div className="App">
      <BookContainer books={books} />
    </div>
  );
}

export default App;
