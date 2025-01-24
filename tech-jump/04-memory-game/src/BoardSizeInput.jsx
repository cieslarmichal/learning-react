import { useState } from 'react';

function BoardSizeInput({ onSubmit }) {
  const [boardSize, setBoardSize] = useState({
    horizontalTiles: 0,
    verticalTiles: 0,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;

    setBoardSize({
      ...boardSize,
      [id]: value,
    });
  };

  return (
    <div className="board-size-input">
      <label htmlFor="horizontalTiles">Horizontal tiles</label>
      <input
        id="horizontalTiles"
        type="number"
        min="2"
        max="4"
        value={boardSize.horizontalTiles}
        onChange={handleChange}
      />
      <label htmlFor="verticalTiles">Vertical tiles</label>
      <input
        id="verticalTiles"
        type="number"
        min="2"
        max="4"
        value={boardSize.verticalTiles}
        onChange={handleChange}
      />
      <button onClick={() => onSubmit(boardSize)}>Start game</button>
      {/* TODO: add validation for odd numbers */}
    </div>
  );
}

export { BoardSizeInput };
