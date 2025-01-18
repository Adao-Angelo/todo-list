import { Trash2 } from "lucide-react";

interface TaskRemoverProps {
  taskId: string;
  onRemove: (taskId: string) => void;
}

export default function TaskRemover({ taskId, onRemove }: TaskRemoverProps) {
  return (
    <Trash2
      onClick={() => onRemove(taskId)}
      size={32}
      className="hover:bg-gray-400 cursor-pointer hover:text-Danger rounded-[0.4rem] p-[0.5rem]"
    ></Trash2>
  );
}
