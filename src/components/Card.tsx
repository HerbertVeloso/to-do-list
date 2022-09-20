import { BiEdit, BiTrash } from "react-icons/bi";

interface CardProps {
  id: number;
  title: string;
}

export function Card(props: CardProps) {
  return (
    <div
      key={props.id}
      className="bg-slate-700 rounded flex items-center gap-2 p-6"
    >
      <input type="checkbox" />
      <p className="flex-1 text-base">{props.title}</p>
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
