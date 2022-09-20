import React, { useState } from "react";
import { Task } from "../services/tasks";

interface Props {
  tasks: Task[];
  addTask: (label: string) => {};
  removeTask: (id: number) => {};
}
export const TaskList: React.FC<Props> = (props: Props) => {
  const [inputValue, setInputValue] = useState("");
  const handleAddClick = () => {
    props.addTask(inputValue);
    setInputValue("");
  };
  const handleDeleteClick = (taskId: number) => {
    console.log("handleDeleteClick", taskId);
    props.removeTask(taskId);
  };
  return (
    <>
      {props.tasks.map((task) => (
        <p key={task.id}>
          {task.label}
          <button
            onClick={() => {
              handleDeleteClick(task.id);
            }}
          >
            Delete
          </button>
        </p>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <input type="button" value="add" onClick={handleAddClick} />
    </>
  );
};
