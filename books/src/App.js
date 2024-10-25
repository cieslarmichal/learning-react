import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from 'axios';

function App () {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    const fetchedBooks = response.data;

    setBooks(fetchedBooks);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleBookCreate = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title });

    const createdBook = response.data;

    setBooks([...books, createdBook]);

    console.log(`Book created: ${title}`);
  };

  const handleBookEdit = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, { title });

    const editedBook = response.data;

    setBooks(books.map((book) => (book.id === id ? editedBook : book)));

    console.log(`Book edited: ${id} ${title}`);
  }

  const handleBookDelete = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    
    setBooks(books.filter((book) => book.id !== id));

    console.log(`Book deleted: ${id}`);
  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={handleBookDelete} onEdit={handleBookEdit}/>
      <BookCreate onCreate={handleBookCreate} />
    </div>
  );
}

export default App;
