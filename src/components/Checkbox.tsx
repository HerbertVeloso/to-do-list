import { useContext } from "react";
import * as CB from "@radix-ui/react-checkbox";
import { BiCheck } from "react-icons/bi";

import { TasksContext } from "../contexts/Tasks";

interface CheckboxProps {
  checkboxId: string;
  taskId: number;
  finished: boolean;
}

export function Checkbox({ checkboxId, taskId, finished }: CheckboxProps) {
  const { toggleTaskStatus } = useContext(TasksContext);

  return (
    <CB.Root
      id={checkboxId}
      className="bg-slate-50 rounded w-4 h-4 flex items-center justify-center"
      checked={finished}
      onClick={() => toggleTaskStatus(taskId)}
    >
      <CB.Indicator className="text-indigo-600">
        <BiCheck />
      </CB.Indicator>
    </CB.Root>
  );
}
