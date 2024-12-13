const { useState } = require("react");

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleButtonClick = () => {
    setIsGameStarted(true);
  };

  const startButton = <button className="start-button" onClick={() => handleButtonClick()}>Start</button>;

  const oddRow = (
    <div className="board-row">
      <div className="square-white"></div>
      <div className="square-black"></div>
      <div className="square-white"></div>
      <div className="square-black"></div>
      <div className="square-white"></div>
      <div className="square-black"></div>
      <div className="square-white"></div>
      <div className="square-black"></div>
    </div>
  );

  const evenRow = (
    <div className="board-row">
      <div className="square-black"></div>
      <div className="square-white"></div>
      <div className="square-black"></div>
      <div className="square-white"></div>
      <div className="square-black"></div>
      <div className="square-white"></div>
      <div className="square-black"></div>
      <div className="square-white"></div>
    </div>
  );

  return (
    <div className="board">
      {!isGameStarted && startButton}
      {oddRow}
      {evenRow}
      {oddRow}
      {evenRow}
      {oddRow}
      {evenRow}
      {oddRow}
      {evenRow}
    </div>
  );
}

export default App;
