import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App () {
  const [books, setBooks] = useState([]);

  const handleBookCreate = (title) => {
    setBooks([...books, { title }]);

    console.log(`Book created: ${title}`);
  };

  return (
    <div>
      <BookCreate onCreate={handleBookCreate} />
    </div>
  );
}

export default App;
