import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow ({book, onDelete, onEdit}) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    const onSubmit = (id, title) => {
      onEdit(id, title);

      setShowEdit(false);
    };

    content = <BookEdit book={book} onSubmit={onSubmit} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={book.title} />
      <div>{content}</div>
      <div className="actions">
      <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
