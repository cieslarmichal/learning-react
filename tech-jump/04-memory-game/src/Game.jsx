import { Board } from './Board';
import { useState } from 'react';
import { BoardSizeInput } from './BoardSizeInput';
import { gameStages } from './constants/gameStage';

const gameStageComponents = {
  [gameStages.boardSizeInput]: BoardSizeInput,
  [gameStages.game]: Board,
};

export function Game() {
  const [gameStage, setGameStage] = useState(gameStages.boardSizeInput);

  const [submittedBoardSize, setSubmittedBoardSize] = useState({
    horizontalTiles: 0,
    verticalTiles: 0,
  });

  const handleSubmitBoardSize = (boardSize) => {
    setGameStage(gameStages.game);

    setSubmittedBoardSize(boardSize);
  };

  const Component = gameStageComponents[gameStage];

  return (
    <div className="game">
      <h1>Memory game</h1>
      <Component
        onSubmit={handleSubmitBoardSize}
        boardSize={submittedBoardSize}
      />
    </div>
  );
}
