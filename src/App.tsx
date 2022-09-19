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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {tasks.map((task) => (<p>{task.label}</p>))}
        <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
        <input type="button" value="add" onClick={handleAddClick} />
      </header>
    </div>
  );
};

export default App;
