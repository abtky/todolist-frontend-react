/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

export interface Task {
  id: number;
  label: string;
}

const endpoint = (path: string): string => {
  const baseUrl = 'http://localhost:8000';
  const url = new URL(`${baseUrl}/${path}`);
  return url.toString();
};
export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(endpoint('task'));
  return response.data;
};

export const addTask = (label: string): Promise<any> =>
  axios.post(endpoint('task'), { label });

export const removeTask = (id: number): Promise<any> =>
  axios.delete(endpoint(`task/${id}`));
