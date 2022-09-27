/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
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
  return (
    <AppRoot>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
      </AppHeader>
      <TaskList tasks={tasks} addTask={addTask} removeTask={removeTask} />
    </AppRoot>
  );
};

export default App;
