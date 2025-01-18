import { Draggable } from "@hello-pangea/dnd";

interface TaskRootProps {
  taskId: string;
  children: React.ReactNode;
  index: number;
}

export default function TaskRoot({ children, taskId, index }: TaskRootProps) {
  return (
    <Draggable index={index} draggableId={taskId}>
      {(providers) => (
        <div
          {...providers.draggableProps}
          {...providers.dragHandleProps}
          ref={providers.innerRef}
          className=" rounded-[0.8rem] flex items-start gap-[1.2rem] p-[1.6rem] bg-gray-500 border border-gray-400"
        >
          {children}
        </div>
      )}
    </Draggable>
  );
}
