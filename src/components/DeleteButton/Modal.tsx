import { Dispatch, SetStateAction, useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { TasksContext } from "../../contexts/Tasks";

interface ModalProps {
  id: number;
  title: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Modal({ id, title, setOpen }: ModalProps) {
  const { deleteTask } = useContext(TasksContext);

  const handleDelete = () => {
    deleteTask(id);
    setOpen(false);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />
      <Dialog.Content className="w-11/12 max-w-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-700 py-6 px-5 rounded flex flex-col gap-4">
        <Dialog.Title className="text-white text-2xl font-medium">
          Deseja realmente deletar a tarefa: "{title}"?
        </Dialog.Title>
        <div className="self-end flex gap-2">
          <Dialog.Close className="bg-gray-400 py-2 px-4 rounded text-white text-sm">
            Cancelar
          </Dialog.Close>
          <button
            className="bg-rose-700 py-2 px-4 rounded text-white text-sm"
            onClick={() => handleDelete()}
          >
            Deletar
          </button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
