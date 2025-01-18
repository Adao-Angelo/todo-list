import type { ReactNode } from "react";

interface TaskContentProps {
  children: ReactNode;
  completed: boolean;
}

export default function TaskContent({ children, completed }: TaskContentProps) {
  return (
    <p
      className={`flex-1 ${
        completed
          ? "line-through dark:text-gray-300 text-gray-300"
          : "dark:text-gray-100 text-gray-700"
      }`}
    >
      {children}
    </p>
  );
}
