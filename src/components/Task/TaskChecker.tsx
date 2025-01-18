import { useTasksStore } from "../../store/TasksStore";

interface TaskCheckerProps {
  taskId: string;
  completed: boolean;
}

export default function TaskChecker({ completed, taskId }: TaskCheckerProps) {
  const { toggleTaskCompleted } = useTasksStore();
  return (
    <div
      onClick={() => toggleTaskCompleted(taskId)}
      className={`min-w-[2.2rem] min-h-[2.2rem] rounded-full ${
        completed
          ? "bg-purpleDark hover:bg-purple"
          : "border-2 border-blueDark hover:border-blue"
      }`}
    ></div>
  );
}
