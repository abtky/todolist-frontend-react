import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTasks } from "./hooks/useTasks";
import { TaskList } from "./components/TaskList";

const App: React.FC = () => {
  const { tasks, addTask, removeTask } = useTasks();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TaskList tasks={tasks} addTask={addTask} removeTask={removeTask} />
    </div>
  );
};

export default App;
