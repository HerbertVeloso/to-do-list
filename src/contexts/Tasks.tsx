import { ReactNode, createContext, useState } from "react";

import { Task } from "../types/Task";

interface TasksContextProps {
  tasks: Array<Task>;
  addTask: (title: string) => void;
  clearTasks: () => void;
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

  function clearTasks() {
    setTasks([]);
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, clearTasks }}>
      {children}
    </TasksContext.Provider>
  );
}
