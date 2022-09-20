import * as Dialog from "@radix-ui/react-dialog";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";

import { Modal } from "./Modal";

interface EditButtonProps {
  id: number;
  title: string;
}

export function EditButton({ id, title }: EditButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <BiEdit size={24} />
      </Dialog.Trigger>

      <Modal setOpen={setOpen} title={title} id={id} />
    </Dialog.Root>
  );
}
