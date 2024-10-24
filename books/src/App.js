import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App () {
  const [books, setBooks] = useState([]);

  const handleBookCreate = (title) => {
    setBooks([...books, { id: Math.floor(Math.random * 10000), title }]);

    console.log(`Book created: ${title}`);
  };

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onCreate={handleBookCreate} />
    </div>
  );
}

export default App;
