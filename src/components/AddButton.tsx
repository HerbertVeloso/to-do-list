import { BsPlusLg } from "react-icons/bs";

export function AddButton() {
  return (
    <button className="flex items-center gap-2 bg-indigo-600 py-3 px-6 rounded">
      <BsPlusLg />
      Adicionar Tarefa
    </button>
  );
}
