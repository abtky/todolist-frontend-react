/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-floating-promises */
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
    fetchTasks().then((response) => setTasks(response));
  };

  const removeTask = async (id: number) => {
    await remove(id);
    fetchTasks().then((response) => setTasks(response));
  };

  useEffect(() => {
    fetchTasks().then((response) => setTasks(response));
  }, []);
  return {
    tasks,
    addTask,
    removeTask,
  };
};
