import { useEffect, useState } from "react";
import { fetchTasks, Task } from "./../services/tasks";
interface ReturnType {
  tasks: Task[];
  addTask: (label: string) => void;
}
export const useTasks = (): ReturnType => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = (label: string) => {
    console.log('addTask', label);
  };

  useEffect(() => {
    fetchTasks().then((response) => setTasks(response));
  }, []);
  return {
    tasks,
    addTask,
  };
};
