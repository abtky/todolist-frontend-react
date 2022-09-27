import React from 'react';
import { Task } from '../services/tasks';
import { TaskListItem } from './TaskListItem';
import { AdditionForm } from './AdditionForm';

interface Props {
  tasks: Task[];
  addTask: (label: string) => void;
  removeTask: (id: number) => void;
}
export const TaskList: React.FC<Props> = (props: Props) => {
  const { tasks, addTask, removeTask } = props;
  return (
    <>
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          handleDeleteClick={removeTask}
        />
      ))}
      <AdditionForm handleAddClick={addTask} />
    </>
  );
};
