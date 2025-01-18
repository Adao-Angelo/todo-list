import { create } from "zustand";

const InitialTasks: TaskType[] = [
  { id: "48273619", title: "Study for the math exam", completed: false },
  { id: "92746183", title: "Buy groceries for the week", completed: true },
  { id: "37482910", title: "Clean the house", completed: false },
  { id: "56129847", title: "Finish work project", completed: true },
  {
    id: "83927465",
    title: "Organize appointment schedule",
    completed: false,
  },
];

export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
};

export type TaskStore = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  removeTask: (taskId: string) => void;
};

export const useTasksStore = create<TaskStore>((set) => {
  const tasks: TaskType[] = InitialTasks;

  const addTask = (task: TaskType) => {
    set((state: TaskStore) => ({ ...state, tasks: [...state.tasks, task] }));
  };

  const removeTask = (taskId: string) => {
    set((state: TaskStore) => ({
      tasks: state.tasks.filter((task: TaskType) => task.id !== taskId),
    }));
  };

  return {
    tasks,
    addTask,
    removeTask,
  };
});
