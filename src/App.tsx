import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useItemRotator } from './useItemRotator';

const items = ["茨城", "熊本", "鹿児島", 27]; // 配列の要素

function App() {
  const item = useItemRotator({arr: items, interval_ms:300});

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <p>{item}</p>
      </header>
    </div>
  );
}

export default App;
