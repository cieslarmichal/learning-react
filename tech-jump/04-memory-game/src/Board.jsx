import { BoardTile } from './BoardTile';
import { imageUrls } from './constants/images';
import { useState } from 'react';

const shuffledImageUrls = [...imageUrls, ...imageUrls].sort(() => Math.random() - 0.5);

export function Board() {
  const [flippedTiles, setFlippedTiles] = useState([]);

  const renderBoardTiles = () => {
    const boardTiles = [];

    for (let i = 0; i < 12; i++) {
      const handleTileClick = () => {
        if (
          flippedTiles.length % 2 === 1 &&
          shuffledImageUrls[flippedTiles[flippedTiles.length - 1]] !== shuffledImageUrls[i]
        ) {
          setFlippedTiles([...flippedTiles, i]);

          setTimeout(() => {
            setFlippedTiles(flippedTiles.slice(0, flippedTiles.length - 1));
          }, 1000);
        } else {
          setFlippedTiles([...flippedTiles, i]);
        }
      };

      boardTiles.push(
        <BoardTile
          key={i}
          imageUrl={shuffledImageUrls[i]}
          handleTileClick={handleTileClick}
          isFlipped={flippedTiles.includes(i)}
        />,
      );
    }

    return boardTiles;
  };

  return <div className="board">{renderBoardTiles()}</div>;
}
