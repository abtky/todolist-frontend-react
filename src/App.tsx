import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import logo from './logo.svg';
import { useTasks } from './hooks/useTasks';
import { TaskList } from './components/TaskList';

const AppRoot = styled.article`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #282c34;
`;

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppHeader = styled.header`
  font-size: calc(10px + 2vmin);
`;

const AppLogo = styled.img`
  height: 20vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 10s linear;
  }
`;

const App: React.FC = () => {
  const { tasks, addTask, removeTask } = useTasks();
  const addTaskRef = (label: string): void => {
    addTask(label).catch((e) => {
      throw e;
    });
  };
  const removeTaskRef = (id: number): void => {
    removeTask(id).catch((e) => {
      throw e;
    });
  };
  return (
    <AppRoot>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
      </AppHeader>
      <TaskList tasks={tasks} addTask={addTaskRef} removeTask={removeTaskRef} />
    </AppRoot>
  );
};

export default App;
