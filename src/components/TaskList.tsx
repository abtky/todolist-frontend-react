import React, { useState } from "react";
import { Task } from "../services/tasks";
import { TaskListItem } from "./TaskListItem";
import { AdditionForm } from "./AdditionForm";

interface Props {
  tasks: Task[];
  addTask: (label: string) => {};
  removeTask: (id: number) => {};
}
export const TaskList: React.FC<Props> = (props: Props) => {
  const handleDeleteClick = (id: number) => {
    props.removeTask(id);
  };
  const handleAddClick = (value: string) => {
    props.addTask(value);
  };
  return (
    <>
      {props.tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
      <AdditionForm handleAddClick={handleAddClick} />
    </>
  );
};
