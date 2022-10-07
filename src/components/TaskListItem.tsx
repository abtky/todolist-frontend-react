import React from 'react';
import { Task } from '../services/tasks';

interface Props {
  task: Task;
  handleDeleteClick: (taskId: number) => void;
}
export const TaskListItem: React.FC<Props> = (props: Props) => {
  const { task, handleDeleteClick: removeTask } = props;
  const handleDeleteClick = () => {
    removeTask(task.id);
  };
  return (
    <dd>
      <p>{task.label}</p>
      <button type="button" onClick={handleDeleteClick}>
        Delete
      </button>
    </dd>
  );
};
