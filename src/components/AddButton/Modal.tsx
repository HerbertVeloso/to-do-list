import { Dispatch, SetStateAction, useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { TasksContext } from "../../contexts/Tasks";

interface ModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ setOpen }: ModalProps) {
  const { addTask } = useContext(TasksContext);
  const [taskTitle, setTaskTitle] = useState("");

  const handleTask = () => {
    addTask(taskTitle);
    setTaskTitle("");
    setOpen(false);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 py-6 px-5 rounded flex flex-col gap-4">
        <Dialog.Title className="text-white text-2xl font-medium">
          Adicionar uma nova tarefa
        </Dialog.Title>
        <input
          placeholder="Digite a tarefa"
          className="py-1 px-2 rounded"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <div className="self-end flex gap-2">
          <Dialog.Close className="bg-gray-400 py-2 px-4 rounded text-white text-sm">
            Cancelar
          </Dialog.Close>
          <button
            className="bg-indigo-600 py-2 px-4 rounded text-white text-sm"
            onClick={() => handleTask()}
          >
            Adicionar
          </button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
