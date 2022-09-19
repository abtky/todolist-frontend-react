import axios from "axios";

const endpoint = (path: string): string => {
  const baseUrl = "http://localhost:8000";
  const url = new URL(`${baseUrl}/path`);
  return url.toString();
};
export const fetchTasks = (): Promise<any> => {
  return axios.get(endpoint('task'));
};

export const addTask = (): Promise<any> => {
  return Promise.resolve();
};
