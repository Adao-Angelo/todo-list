interface TaskCheckerProps {
  completed: boolean;
}

export default function TaskChecker({ completed }: TaskCheckerProps) {
  return (
    <div
      className={`min-w-[2.2rem] min-h-[2.2rem] rounded-full ${
        completed
          ? "bg-purpleDark hover:bg-purple"
          : "border-2 border-blueDark hover:border-blue"
      }`}
    ></div>
  );
}
