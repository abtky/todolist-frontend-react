import axios from 'axios';

export interface Task {
  id: number;
  label: string;
}

const endpoint = (path: string): string => {
  const baseUrl = 'http://127.0.0.1:8000';
  const url = new URL(`${baseUrl}/${path}`);
  return url.toString();
};
export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get<Task[]>(endpoint('task'));
  return response.data;
};

export const addTask = (label: string): Promise<any> =>
  axios.post(endpoint('task'), { label });

export const removeTask = (id: number): Promise<any> =>
  axios.delete(endpoint(`task/${id}`));
