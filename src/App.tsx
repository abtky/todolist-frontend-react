/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import React from 'react';

import logo from './logo.svg';
import { useTasks } from './hooks/useTasks';
import { TaskList } from './components/TaskList';

const logoSpin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});

const style = {
  root: css({
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: '#282c34',
  }),
  header: css({
    fontSize: 'calc(10px + 2vmin)',
  }),
  logo: css({
    height: '20vmin',
    pointerEvents: 'none',
    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${logoSpin} infinite 10s linear`,
    },
  }),
};

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
    <article css={style.root}>
      <header css={style.header}>
        <img css={style.logo} src={logo} alt="logo" />
      </header>
      <TaskList tasks={tasks} addTask={addTaskRef} removeTask={removeTaskRef} />
    </article>
  );
};

export default App;
