import styles from './TasksInfo.module.css'

interface TasksInfoProps {
  created: number,
  concluded: number,
}

export function TasksInfo({ created, concluded }: TasksInfoProps) {
  return (
    <div className={styles.container}>
      <div className={styles.createdTasks}>
        <strong>Tarefas criadas</strong>
        <span>{created || 0}</span>
      </div>
      <div className={styles.completedTasks}>
        <strong>Concluídas</strong>
        <span>{concluded || 0}</span>
      </div>
    </div>
  )
}