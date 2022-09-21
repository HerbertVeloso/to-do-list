import { useContext, useState, useEffect } from "react";
import { BiTrash } from "react-icons/bi";

import { TasksContext } from "../contexts/Tasks";
import { Card } from "./Card";
import { AddButton } from "./AddButton";

export function List() {
  const { tasks, clearTasks } = useContext(TasksContext);

  const [pendingTasks, setPendingTasks] = useState<number>(0);

  useEffect(() => {
    const tasksAux = tasks.filter((task) => task.finished === false);
    setPendingTasks(tasksAux.length);
  }, [tasks]);

  return (
    <main className="max-w-3xl mx-auto pb-16">
      <section className="flex flex-col gap-3 my-16">
        {tasks.length > 0 ? (
          tasks
            .sort((task) => (task.finished ? 1 : -1))
            .map((task, index) => (
              <Card title={task.title} finished={task.finished} id={index} />
            ))
        ) : (
          <p className="self-center text-sm">Nenhuma tarefa cadastrada</p>
        )}
      </section>
      <section className="flex items-center gap-2">
        <p className="flex-1">
          Você tem {pendingTasks} tarefa{pendingTasks == 1 ? "" : "s"} pendente
          {pendingTasks == 1 ? "" : "s"}
        </p>
        <AddButton small={true} />
        <button
          className="bg-rose-700 rounded p-3"
          onClick={() => clearTasks()}
        >
          <BiTrash size={18} />
        </button>
      </section>
    </main>
  );
}
