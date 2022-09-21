import * as CB from "@radix-ui/react-checkbox";
import { BiCheck } from "react-icons/bi";

interface CheckboxProps {
  id: string;
}

export function Checkbox(props: CheckboxProps) {
  return (
    <CB.Root
      id={props.id}
      className="bg-slate-50 rounded w-4 h-4 flex items-center justify-center"
    >
      <CB.Indicator className="text-indigo-600">
        <BiCheck />
      </CB.Indicator>
    </CB.Root>
  );
}
