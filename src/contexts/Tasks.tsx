import { ReactNode, createContext, useState } from "react";

import { Task } from "../types/Task";

interface TasksContextProps {
  tasks: Array<Task>;
  addTask: (title: string) => void;
}

export const TasksContext = createContext({} as TasksContextProps);

interface TasksProviderProps {
  children: ReactNode;
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  function addTask(title: string) {
    const task: Task = {
      title,
      finish: false,
    };
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask }}>
      {children}
    </TasksContext.Provider>
  );
}
