import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/useBooksContext';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBook } = useBooksContext();

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    deleteBook(book.id);
  };

  let content = <h3>{book.title}</h3>;

  const onSubmit = () => {
    setShowEdit(false);
  };

  if (showEdit) {
    content = (
      <BookEdit
        book={book}
        onSubmit={onSubmit}
      />
    );
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt={book.title}
      />
      <div>{content}</div>
      <div className="actions">
        <button
          className="edit"
          onClick={handleEditClick}
        >
          Edit
        </button>
        <button
          className="delete"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
