/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Task } from '../services/tasks';

interface Props {
  task: Task;
  handleDeleteClick: (taskId: number) => void;
}
export const TaskListItem: React.FC<Props> = (props: Props) => {
  const { task } = props;
  const handleDeleteClick = () => {
    props.handleDeleteClick(task.id);
  };
  return (
    <dd>
      <p>{task.label}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </dd>
  );
};
