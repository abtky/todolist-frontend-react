import { useEffect, useState } from 'react';
import {
  fetchTasks,
  addTask as add,
  removeTask as remove,
  Task,
} from '../services/tasks';

interface ReturnType {
  tasks: Task[];
  addTask: (label: string) => Promise<void>;
  removeTask: (id: number) => Promise<void>;
}
export const useTasks = (): ReturnType => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = async (label: string) => {
    await add(label);
    fetchTasks()
      .then((response) => setTasks(response))
      .catch((e) => {
        throw e;
      });
  };

  const removeTask = async (id: number) => {
    await remove(id);
    fetchTasks()
      .then((response) => setTasks(response))
      .catch((e) => {
        throw e;
      });
  };

  useEffect(() => {
    fetchTasks()
      .then((response) => setTasks(response))
      .catch((e) => {
        throw e;
      });
  }, []);
  return {
    tasks,
    addTask,
    removeTask,
  };
};
