import type { ReactNode } from "react";

interface TaskContentProps {
  children: ReactNode;
  completed: boolean;
}

export default function TaskContent({ children, completed }: TaskContentProps) {
  return (
    <p
      className={`flex-1 ${
        completed ? "line-through text-gray-300" : "text-gray-100"
      }`}
    >
      {children}
    </p>
  );
}
