interface TaskRootProps {
  children: React.ReactNode;
}

export default function TaskRoot({ children }: TaskRootProps) {
  return (
    <div className=" rounded-[0.8rem] flex items-start gap-[1.2rem] p-[1.6rem] bg-gray-500 border border-gray-400">
      {children}
    </div>
  );
}
