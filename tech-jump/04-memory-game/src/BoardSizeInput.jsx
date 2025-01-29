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

  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmitClick = () => {
    if ((boardSize.horizontalTiles * boardSize.verticalTiles) % 2 !== 0) {
      setErrorMessage('The number of tiles must be even');
      return;
    }

    onSubmit(boardSize);
  };

  return (
    <>
      <div className="boardSizeInput">
        <div className="tilesInput">
          <label
            htmlFor="horizontalTiles"
            className="tilesInputLabel"
          >
            Horizontal tiles
          </label>
          <input
            id="horizontalTiles"
            type="number"
            min="2"
            max="4"
            value={boardSize.horizontalTiles}
            onChange={handleChange}
          />
        </div>

        <div className="tilesInput">
          <label
            htmlFor="verticalTiles"
            className="tilesInputLabel"
          >
            Vertical tiles
          </label>
          <input
            id="verticalTiles"
            type="number"
            min="2"
            max="4"
            value={boardSize.verticalTiles}
            onChange={handleChange}
          />
        </div>

        <button onClick={onSubmitClick}>Start game</button>
      </div>
      {errorMessage && (
        <div className="formErrorContainer">
          <p className="formError">{errorMessage}</p>
        </div>
      )}
    </>
  );
}

export { BoardSizeInput };
