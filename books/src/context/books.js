import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    const fetchedBooks = response.data;

    setBooks(fetchedBooks);
  };


  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title });

    const createdBook = response.data;

    setBooks([...books, createdBook]);

    console.log(`Book created: ${title}`);
  };

  const editBook = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, { title });

    const editedBook = response.data;

    setBooks(books.map((book) => (book.id === id ? editedBook : book)));

    console.log(`Book edited: ${id} ${title}`);
  }

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    setBooks(books.filter((book) => book.id !== id));

    console.log(`Book deleted: ${id}`);
  }

  return (
    <BooksContext.Provider value={{ books, setBooks, fetchBooks, createBook, editBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };

export default BooksContext;


