export function BoardTile({ imageUrl, handleTileClick, isFlipped }) {
  return (
    <div
      className="boardTile"
      onClick={handleTileClick}
    >
      {isFlipped && (
        <img
          className="boardTileImage"
          src={imageUrl}
          alt="random"
        />
      )}
    </div>
  );
}
