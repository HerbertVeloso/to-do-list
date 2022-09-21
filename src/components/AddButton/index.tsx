import * as Dialog from "@radix-ui/react-dialog";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";

import { Modal } from "./Modal";

interface AddButtonProps {
  small?: boolean;
}

export function AddButton({ small }: AddButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className={`bg-indigo-600 rounded ${
          small ? "p-3" : "py-3 px-6 flex items-center gap-2"
        }`}
      >
        <BsPlusLg />
        {small ? "" : "Adicionar Tarefa"}
      </Dialog.Trigger>

      <Modal setOpen={setOpen} />
    </Dialog.Root>
  );
}
