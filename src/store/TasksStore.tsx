import { create } from "zustand";

export type TaskType = {
  id: string;
  title: string;
  completed: boolean;
};

export type TaskStore = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  removeTask: (taskId: string) => void;
  setTasks: (tasks: TaskType[]) => void;
};

const LOCAL_STORAGE_KEY = "tasks";

const getTasksFromLocalStorage = (): TaskType[] => {
  const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

const saveTasksToLocalStorage = (tasks: TaskType[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

export const useTasksStore = create<TaskStore>((set) => {
  const initialTasks = getTasksFromLocalStorage();

  const addTask = (task: TaskType) => {
    set((state) => {
      const updatedTasks = [...state.tasks, task];
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    });
  };

  const removeTask = (taskId: string) => {
    set((state) => {
      const updatedTasks = state.tasks.filter((task) => task.id !== taskId);
      saveTasksToLocalStorage(updatedTasks);
      return { tasks: updatedTasks };
    });
  };

  const setTasks = (tasks: TaskType[]) => {
    saveTasksToLocalStorage(tasks);
    set({ tasks });
  };

  return {
    tasks: initialTasks,
    addTask,
    removeTask,
    setTasks,
  };
});
