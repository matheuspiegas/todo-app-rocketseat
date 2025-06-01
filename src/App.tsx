import { Header } from "./components/Header";
import styles from "./App.module.css";
import { CreateTaskInput } from "./components/CreateTaskInput";
import { TasksInfo } from "./components/TasksInfo";
import { Task } from "./components/Task";
import { v4 as uuidv4 } from "uuid";
import { TaskType } from "../types/index";
import { useEffect, useState } from "react";
import { EmptyTasks } from "./components/EmptyTasks";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>(
    JSON.parse(localStorage.getItem("@todo-app:todos-state-1.0.0") || "[]")
  );

  useEffect(() => {
    const stringJSON = JSON.stringify(tasks);
    localStorage.setItem("@todo-app:todos-state-1.0.0", stringJSON);
  }, [tasks]);

  const totalTasks = tasks.length;
  const concludedTasks = tasks.filter((task) => task.isCompleted).length;

  function handleCreateTask(content: string) {
    setTasks((tasks) => {
      return [
        ...tasks,
        {
          id: uuidv4(),
          name: content,
          isCompleted: false,
        },
      ];
    });
  }

  function handleCompleteTask(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, isCompleted: !task.isCompleted };

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <CreateTaskInput onCreateTask={handleCreateTask} />
        <TasksInfo concluded={concludedTasks} created={totalTasks} />
        <div>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                onComplete={handleCompleteTask}
                onDelete={handleDeleteTask}
                task={task}
                key={task.id}
              />
            ))
          ) : (
            <EmptyTasks />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
