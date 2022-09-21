import { BiEdit, BiTrash } from "react-icons/bi";

import { Checkbox } from "./Checkbox";

interface CardProps {
  id: number;
  title: string;
}

export function Card(props: CardProps) {
  const checkboxId = `check${props.id}`;
  return (
    <div
      key={props.id}
      className="bg-slate-700 rounded flex items-center gap-2 p-6"
    >
      <Checkbox id={checkboxId} />
      <label htmlFor={checkboxId} className="flex-1 text-base">
        {props.title}
      </label>
      <div className="flex gap-1">
        <button>
          <BiEdit size={24} />
        </button>
        <button>
          <BiTrash size={24} />
        </button>
      </div>
    </div>
  );
}
