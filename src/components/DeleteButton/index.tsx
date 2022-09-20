import * as Dialog from "@radix-ui/react-dialog";
import { BiTrash } from "react-icons/bi";
import { useState } from "react";

import { Modal } from "./Modal";

interface DeleteButtonProps {
  id: number;
  title: string;
}

export function DeleteButton({ id, title }: DeleteButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <BiTrash size={24} />
      </Dialog.Trigger>

      <Modal setOpen={setOpen} title={title} id={id} />
    </Dialog.Root>
  );
}
