import axios from "axios";

export interface Task {
  id: number;
  label: string;
}

const endpoint = (path: string): string => {
  const baseUrl = "http://localhost:8000";
  const url = new URL(`${baseUrl}/${path}`);
  return url.toString();
};
export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(endpoint("task"));
  return response.data;
};

export const addTask = (label: string): Promise<any> => {
  const data: Task = { id: 0, label };
  return axios.post(endpoint("task"), data);
};
