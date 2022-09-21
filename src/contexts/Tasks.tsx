import { ReactNode, createContext, useState } from "react";

import { Task } from "../types/Task";

interface TasksContextProps {
  tasks: Array<Task>;
  addTask: (title: string) => void;
  clearTasks: () => void;
  editTask: (id: number, title: string) => void;
  deleteTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;
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
      finished: false,
    };
    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function editTask(id: number, title: string) {
    let tasksAux = [...tasks];
    tasksAux[id].title = title;
    setTasks(tasksAux);
  }

  function toggleTaskStatus(id: number) {
    let tasksAux = [...tasks];
    tasksAux[id].finished = !tasksAux[id].finished;
    setTasks(tasksAux);
  }

  function deleteTask(id: number) {
    let tasksAux = [...tasks];
    tasksAux.splice(id, 1);
    setTasks(tasksAux);
  }

  function clearTasks() {
    setTasks([]);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        clearTasks,
        editTask,
        deleteTask,
        toggleTaskStatus,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
