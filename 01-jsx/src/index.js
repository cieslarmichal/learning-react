import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

function App() {
  return <h1>Hello there!</h1>;
}

root.render(<App />);
