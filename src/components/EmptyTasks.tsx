import emptyTasksSvg from '../assets/Clipboard.svg'
import styles from './EmptyTasks.module.css'

export function EmptyTasks() {
  return (
    <div className={styles.container}>
      <img src={emptyTasksSvg} alt="No tasks" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}