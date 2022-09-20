import { Checkbox } from "./Checkbox";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

interface CardProps {
  id: number;
  title: string;
}

export function Card({ id, title }: CardProps) {
  const checkboxId = `check${id}`;
  return (
    <div key={id} className="bg-slate-700 rounded flex items-center gap-2 p-6">
      <Checkbox id={checkboxId} />
      <label htmlFor={checkboxId} className="flex-1 text-base">
        {title}
      </label>
      <div className="flex gap-1">
        <EditButton id={id} title={title} />
        <DeleteButton id={id} title={title} />
      </div>
    </div>
  );
}
