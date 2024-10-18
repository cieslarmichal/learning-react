function App() {
  const handleClick = () => {
    console.log('Add Animal');
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
    </div>
  );
}

export default App;
