import { BoardTile } from './BoardTile';
import { imageUrls } from './constants/images';
import { useMemo, useState } from 'react';

export function Board({ boardSize }) {
  const shuffledImageUrls = useMemo(() => {
    const numerOfTiles = boardSize.horizontalTiles * boardSize.verticalTiles;

    const numberOfUniqueImages = numerOfTiles / 2;

    const selectedImageUrls = imageUrls.sort(() => Math.random() - 0.5).slice(0, numberOfUniqueImages);

    return [...selectedImageUrls, ...selectedImageUrls].sort(() => Math.random() - 0.5);
  }, [boardSize]);

  const [flippedTiles, setFlippedTiles] = useState([]);

  const [blocked, setBlocked] = useState(false);

  const handleTileClick = (index) => {
    if (blocked) {
      return;
    }

    if (
      flippedTiles.length % 2 === 1 &&
      shuffledImageUrls[flippedTiles[flippedTiles.length - 1]] !== shuffledImageUrls[index]
    ) {
      setFlippedTiles([...flippedTiles, index]);

      setBlocked(true);

      setTimeout(() => {
        setFlippedTiles(flippedTiles.slice(0, flippedTiles.length - 1));

        setBlocked(false);
      }, 1000);
    } else {
      setFlippedTiles([...flippedTiles, index]);
    }
  };

  const renderedBoardTiles = shuffledImageUrls.map((imageUrl, index) => (
    <BoardTile
      key={index}
      imageUrl={imageUrl}
      handleTileClick={() => handleTileClick(index)}
      isFlipped={flippedTiles.includes(index)}
    />
  ));

  // TODO: adjust size for lower tiles count than 4x4
  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${boardSize.horizontalTiles}, 1fr)`,
        gridTemplateRows: `repeat(${boardSize.verticalTiles}, 1fr)`,
      }}
    >
      {renderedBoardTiles}
    </div>
  );
}
