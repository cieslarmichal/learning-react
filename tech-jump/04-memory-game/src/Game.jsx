import { Board } from './Board';
import { useRef, useState } from 'react';
import { BoardSizeInput } from './BoardSizeInput';
import { gameStages } from './constants/gameStage';
import { GameResults } from './GameResults';

export function Game() {
  const [gameStage, setGameStage] = useState(gameStages.boardSizeInput);

  const [submittedBoardSize, setSubmittedBoardSize] = useState({
    horizontalTiles: 0,
    verticalTiles: 0,
  });

  const [failedGuesses, setFailedGuesses] = useState(0);

  const startDate = useRef(0);
  const endDate = useRef(0);

  const handleSubmitBoardSize = (boardSize) => {
    startDate.current = new Date().getTime();

    setGameStage(gameStages.game);

    setSubmittedBoardSize(boardSize);
  };

  const handleGameEnd = () => {
    endDate.current = new Date().getTime();

    setGameStage(gameStages.results);
  };

  const onFailedGuess = () => {
    setFailedGuesses(failedGuesses + 1);
  };

  const onRestart = () => {
    setGameStage(gameStages.boardSizeInput);
    setFailedGuesses(0);
    setSubmittedBoardSize({
      horizontalTiles: 0,
      verticalTiles: 0,
    });
  };

  const renderGameStageComponent = (gameStage) => {
    switch (gameStage) {
      case gameStages.boardSizeInput:
        return <BoardSizeInput onSubmit={handleSubmitBoardSize} />;
      case gameStages.game:
        return (
          <Board
            boardSize={submittedBoardSize}
            onGameEnd={handleGameEnd}
            onFailedGuess={onFailedGuess}
          />
        );
      case gameStages.results:
        return (
          <GameResults
            failedGuesses={failedGuesses}
            timeElapsed={endDate.current - startDate.current}
            onRestart={onRestart}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="game">
      <h1>Memory game</h1>
      {renderGameStageComponent(gameStage)}
    </div>
  );
}
