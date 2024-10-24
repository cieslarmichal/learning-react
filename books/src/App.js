import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App () {
  const [books, setBooks] = useState([]);

  const handleBookCreate = (title) => {
    setBooks([...books, { id: Math.floor(Math.random() * 10000), title }]);

    console.log(`Book created: ${title}`);
  };

  const handleBookEdit = (id, title) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }

      return book;
    });

    setBooks(newBooks);

    console.log(`Book edited: ${id} ${title}`);
  }

  const handleBookDelete = (id) => {
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
