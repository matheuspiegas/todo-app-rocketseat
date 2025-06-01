import { Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

interface TaskProps {
  task: {
    id: string;
    name: string;
    isCompleted: boolean;
  };
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Task({ task, onComplete, onDelete }: TaskProps) {
  function handleCompleteTask() {
    console.log(task.id);
    onComplete(task.id);
  }

  function handleDeleteTask() {
    onDelete(task.id);
  }

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onClick={handleCompleteTask}
      />
      <div
        onClick={handleCompleteTask}
        className={task.isCompleted ? styles.taskCompleted : styles.taskContent}
      >
        <p>{task.name}</p>
      </div>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={handleDeleteTask}
      >
        <Trash />
      </button>
    </div>
  );
}
