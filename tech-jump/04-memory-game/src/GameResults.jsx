function GameResults({ failedGuesses, timeElapsed, onRestart }) {
  return (
    <div>
      <div>
        <h2>Game finished</h2>
      </div>
      <div>
        <p>Failed guesses: {failedGuesses}</p>
      </div>
      <div>
        <p>Time elapsed: {timeElapsed / 1000} seconds</p>
      </div>
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}

export { GameResults };
