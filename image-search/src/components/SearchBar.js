import { useState } from "react";

function SearchBar({onSubmit}) {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." onChange={handleChange} value={term}/>
      </form>
    </div>
  );
}

export default SearchBar;
