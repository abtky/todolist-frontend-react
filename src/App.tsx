import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTasks } from "./hooks/useTasks";

const App: React.FC = () => {
  const { tasks, addTask } = useTasks();
  const [inputValue, setInputValue] = useState('');
  const handleAddClick = () => {
    addTask(inputValue);
    setInputValue('');
  }
  const myTasks = tasks.join()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>task: {myTasks}</p>
        <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
        <input type="button" value="add" onClick={handleAddClick} />
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
      </header>
    </div>
  );
};

export default App;
