import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit ({book, onSubmit}) {
  const [title, setTitle] = useState(book.title);

  const {editBook} = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    editBook(book.id, title);

    onSubmit();
  };

  return (
    <div className="book-Edit">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} type="text" onChange={handleChange}/>
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
