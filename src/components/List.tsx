import { useContext, useState } from "react";

import { TasksContext } from "../contexts/Tasks";
import { Task } from "../types/Task";
import { Card } from "./Card";

export function List() {
  const { tasks, addTask } = useContext(TasksContext);

  const [taskTitle, setTaskTitle] = useState("");

  const handleTask = () => {
    addTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <main className="max-w-3xl mx-auto my-16">
      <section className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <Card title={task.title} id={index} />
        ))}
      </section>
      <section className="mt-8 flex">
        <p className="flex-1">Você tem {tasks.length} tarefas pendentes</p>
        <button>Adicionar Tarefa</button>
        <button>Limpar Tarefas</button>
      </section>

      <div>
        <input
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button onClick={() => handleTask()}>Add</button>
      </div>
    </main>
  );
}
