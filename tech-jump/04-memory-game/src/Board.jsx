import { BoardTile } from './BoardTile';
import { imageUrls } from './constants/images';
import { useState } from 'react';

const shuffledImageUrls = [...imageUrls, ...imageUrls].sort(() => Math.random() - 0.5);

export function Board() {
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

  return <div className="board">{renderedBoardTiles}</div>;
}
