import { Checkbox } from "./Checkbox";
import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

interface CardProps {
  id: number;
  title: string;
  finished: boolean;
}

export function Card({ id, title, finished }: CardProps) {
  const checkboxId = `check${id}`;
  return (
    <div
      key={id}
      className={`rounded flex items-center gap-2 p-6 ${
        finished ? "bg-slate-800" : "bg-slate-700"
      }`}
    >
      <Checkbox checkboxId={checkboxId} taskId={id} finished={finished} />
      <label
        htmlFor={checkboxId}
        className={`flex-1 text-base cursor-pointer ${
          finished ? "line-through" : ""
        }`}
      >
        {title}
      </label>
      <div className={`flex gap-1 ${finished ? "hidden" : ""}`}>
        <EditButton id={id} title={title} />
        <DeleteButton id={id} title={title} />
      </div>
    </div>
  );
}
