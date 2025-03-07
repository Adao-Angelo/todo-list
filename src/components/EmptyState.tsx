import { ClipboardList } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="border-t  dark:border-gray-400 border-gray-200 flex justify-center items-center min-h-[24.4rem]">
      <div className="text-center">
        <ClipboardList
          size={56}
          strokeWidth={1}
          className="m-auto mb-[1.6rem] animate-up-down text-gray-400"
        />
        <p className="font-bold">You don't have tasks registered yet</p>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </div>
  );
}
