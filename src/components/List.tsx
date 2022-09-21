import { useContext } from "react";
import { BiTrash } from "react-icons/bi";

import { TasksContext } from "../contexts/Tasks";
import { Card } from "./Card";
import { AddButton } from "./AddButton";

export function List() {
  const { tasks, clearTasks } = useContext(TasksContext);

  return (
    <main className="max-w-3xl mx-auto pb-16">
      <section className="flex flex-col gap-3 my-16">
        {tasks.length > 0 ? (
          tasks.map((task, index) => <Card title={task.title} id={index} />)
        ) : (
          <p className="self-center text-sm">Nenhuma tarefa cadastrada</p>
        )}
      </section>
      <section className="flex items-center gap-2">
        <p className="flex-1">Você tem {tasks.length} tarefas pendentes</p>
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
