import { useEffect, useState } from "react";
import { fetchTasks, addTask as add, Task } from "./../services/tasks";
interface ReturnType {
  tasks: Task[];
  addTask: (label: string) => Promise<void>;
}
export const useTasks = (): ReturnType => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = async(label: string) => {
    await add(label)
    fetchTasks().then((response) => setTasks(response));
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
