import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTasks } from "./hooks/useTasks";

const App: React.FC = () => {
  const { tasks, addTask, removeTask } = useTasks();
  const [inputValue, setInputValue] = useState('');
  const handleAddClick = () => {
    addTask(inputValue);
    setInputValue('');
  }
  const handleDeleteClick = (taskId: number) => {
    console.log('handleDeleteClick', taskId);
    removeTask(taskId);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {tasks.map((task) => (<p key={task.id}>{task.label}<button onClick={() => { handleDeleteClick(task.id) }}>Delete</button></p>))}
        <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
        <input type="button" value="add" onClick={handleAddClick} />
      </header>
    </div>
  );
};

export default App;
