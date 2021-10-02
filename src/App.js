import './App.css';
import React from 'react'
import Todos from './components/todos';
import Counter from './components/count';

function App() {
  return (
    <div className="App">
      <h1>React/ Hooks</h1>
      <Todos />
      <Counter />

    </div>
  );
}

export default App;
