import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import { CirclePlus, Rocket } from "lucide-react";
import { useState } from "react";
import EmptyState from "./components/EmptyState";
import { Task } from "./components/Task";
import { TaskType, useTasksStore } from "./store/TasksStore";

function App() {
  const { tasks, addTask, removeTask, setTasks } = useTasksStore();
  const [newTask, setNewTask] = useState("");
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  function Reorder<T>(list: T[], startIndex: number, endIndex: number) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const listTask = Reorder(
      tasks,
      result.source.index,
      result.destination.index
    );
    setTasks(listTask);
  };

  return (
    <main className="bg-gray-600 min-h-screen text-gray-300 text-[1.6rem] pb-[20rem]">
      <div className="bg-gray-700 pt-[7.2rem] pb-[8rem] flex justify-center items-center">
        <div className="flex items-center gap-[1.2rem]">
          <Rocket className="w-[2.4rem] text-purpleDark  animate-up-down"></Rocket>
          <h1 className="text-[4rem] font-black">
            <span className="text-blue">to</span>
            <span className="text-purpleDark">do</span>
          </h1>
        </div>
      </div>
      <div>
        <section className="flex  m-auto mt-[-3rem]  items-center gap-[0.8rem] max-w-[73.6rem]">
          <input
            className="flex-1 border outline-none border-gray-700 text-[1.6rem] bg-gray-500 rounded-[0.8rem] p-[1.6rem] placeholder:text-gray-300 focus:border-purpleDark focus:text-gray-100"
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button
            onClick={() => {
              if (newTask.trim() === "") return;
              addTask({
                id: Math.random().toString(36).substr(2, 9),
                title: newTask,
                completed: false,
              });
              setNewTask("");
            }}
            className="text-[1.4rem] flex bg-blueDark hover:bg-blue gap-[0.8rem] font-bold rounded-[0.8rem] p-[1.6rem] text-gray-100"
          >
            Create <CirclePlus></CirclePlus>
          </button>
        </section>
        <div className="mt-[9.2rem] m-auto max-w-[73.6rem]">
          <div className="flex justify-between">
            <div className="flex gap-[0.8rem]">
              <p className="font-bold text-blue text-[1.4rem]">Tasks created</p>
              <span className=" font-bold bg-gray-400 rounded-full text-gray-100 text-[1.2rem] px-[0.8rem] py-[0.2rem]">
                {totalTasks}
              </span>
            </div>
            <div className="flex gap-[0.8rem]">
              <p className="font-bold text-purpleDark text-[1.4rem]">
                Completed
              </p>
              <span className=" font-bold bg-gray-400 rounded-full text-gray-100 text-[1.2rem] px-[0.8rem] py-[0.2rem]">
                {completedTasks}
              </span>
            </div>
          </div>
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="Tasks" type="list" direction="vertical">
              {(providers) => (
                <div
                  ref={providers.innerRef}
                  {...providers.droppableProps}
                  className="mt-[2.4rem] grid gap-[1.2rem] overflow-y-scroll"
                >
                  {tasks.length > 0 ? (
                    tasks.map((task: TaskType, index) => (
                      <Task.TaskRoot
                        index={index}
                        taskId={task.id}
                        key={task.id}
                      >
                        <Task.TaskChecker
                          taskId={task.id}
                          completed={task.completed}
                        />
                        <Task.TaskContent completed={task.completed}>
                          {task.title}
                        </Task.TaskContent>
                        <Task.TaskRemover
                          taskId={task.id}
                          onRemove={removeTask}
                        />
                      </Task.TaskRoot>
                    ))
                  ) : (
                    <EmptyState />
                  )}
                  {providers.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </main>
  );
}

export default App;
